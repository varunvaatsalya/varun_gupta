import { createHmac, timingSafeEqual } from "crypto";

const SECRET = process.env.ADMIN_SESSION_SECRET || "admin-secret";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password123";

function createSignature(payload) {
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

function encodeToken(data) {
  return `${Buffer.from(data, "utf8").toString("base64")}.${createSignature(data)}`;
}

function decodeToken(token) {
  const [payloadBase64, signature] = token?.split(".") ?? [];
  if (!payloadBase64 || !signature) return null;
  try {
    const payload = Buffer.from(payloadBase64, "base64").toString("utf8");
    const expected = Buffer.from(createSignature(payload), "hex");
    const actual = Buffer.from(signature, "hex");
    if (expected.length !== actual.length) return null;
    if (!timingSafeEqual(expected, actual)) return null;
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function createAdminToken() {
  const payload = JSON.stringify({ admin: true, createdAt: Date.now() });
  return encodeToken(payload);
}

export function verifyAdminToken(token) {
  const payload = decodeToken(token);
  return payload?.admin === true ? payload : null;
}

export function verifyAdminCredentials(email, password) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}
