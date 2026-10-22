// Gmail ignores dots and "+tag" in the local part, so a.b+x@gmail.com is a.b@gmail.com.
export default function normalizeEmail(value) {
  const [local = "", domain = ""] = value.trim().toLowerCase().split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    return `${local.split("+")[0].replace(/\./g, "")}@gmail.com`;
  }
  return `${local}@${domain}`;
}
