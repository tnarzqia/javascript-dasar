const browser = "firefox";

switch (browser) {
  case "edge":
    console.log("Browser Anda tidak mendukung aplikasi ini");
    break;
  case "chrome":
  case "firefox":
  case "safari":
    console.log("Browser Anda mendukung aplikasi ini");
    break;
  default:
    console.log("Semoga tampilan aplikasi ini cukup baik");
}
console.log(browser);