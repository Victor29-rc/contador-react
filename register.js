/* if (navigator.serviceWorker) {
  console.log("Si existe");
} */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}
