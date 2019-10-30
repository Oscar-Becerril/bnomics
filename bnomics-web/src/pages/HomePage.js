import React from "react";
import Button from "react-bootstrap/Button";

class HomePage extends React.Component {
  state = {};

  componentDidMount() {
    console.log("Home page Mounted");
  }

  render() {
    return (
      <>
        <div className="mt-5 row">
          <div className="col-sm-1"></div>
          <div className="text-justify m-md-auto mx-3 col-sm-6">
            Bienvenido a <b>Bnomics</b>
          </div>
          <div className="ml-2 col-sm-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            cumque alias, odit, consequatur voluptate libero neque, molestiae
            saepe illum ex tenetur voluptates nulla doloribus? Doloremque
            voluptas voluptates reiciendis! Ab, delectus!
            <div>
              <Button>Unete</Button>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </>
    );
  }
}

export default HomePage;
