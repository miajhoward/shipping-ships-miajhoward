import { DockList } from "./DockList.js";
const mainContainer = document.querySelector("#container");
const applicationHTML = `
<h1>Shipping ships</h1>
<article class="details">
 <section class="detail--column list details__DockList">
        <h2>Docks with Service</h2>
        ${DockList()}
  </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
