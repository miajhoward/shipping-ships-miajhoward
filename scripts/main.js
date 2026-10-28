import { DockList } from "./DockList.js";
import { HaulerList } from "./Haulers.js";
import { ShippingList } from "./Shippinglist.js";
const mainContainer = document.querySelector("#container");
const applicationHTML = `
<h1>Shipping ships</h1>
<article class="details">
 <section class="detail--column list details__DockList">
        <h2>Docks with Service</h2>
        ${DockList()}
  </section>
   <section class="detail--column list details__HaulerList">
        <h2>Haulers with Service</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__ShippingList">
        <h2>Ships with Service</h2>
        ${ShippingList()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
