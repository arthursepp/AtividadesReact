import React from "react";
import "./style/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Aside from './aside.jsx'
import Footer from './footer.jsx'

const Main = () => {
  return (
    <div className="main">
      <h3>
        Aqui é o conteúdo principal da página! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsam quos earum laudantium consequuntur
        quod. Nostrum molestiae est sequi beatae! Distinctio non eaque minima
        quibusdam obcaecati! Cupiditate numquam laboriosam incidunt alias.
      </h3>
      <br />
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quisquam perferendis ipsam modi dignissimos corrupti, laudantium maxime
        provident molestias quae est. At ducimus esse reprehenderit nemo quod
        porro dolores necessitatibus!
      </h3>
      <br />
      <Aside />
        <Footer className="footer-main" />
    </div>
  );
};
export default Main;
