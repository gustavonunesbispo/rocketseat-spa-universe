import { Router } from "./router.js";

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/explorer', "/pages/explorer.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => {
  router.route();

  const currentPage = window.location.pathname;
  const body = document.querySelector('body');

  switch (currentPage) {
    case '/':
      body.style.backgroundImage = 'url(../assets/mountains-universe-1.png)';
      break;
    case '/universe':
      body.style.backgroundImage = 'url(../assets/mountains-universe-2.png)';
      break;
    case '/explorer':
      body.style.backgroundImage = 'url(../assets/mountains-universe-3.png)';
      break;
    default:
      body.style.backgroundImage = 'url(../assets/mountains-universe-1.png)';
  }
}