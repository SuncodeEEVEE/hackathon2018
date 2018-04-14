import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/car3.jpeg";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <UserCard
                bgImage="https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg?auto=compress&cs=tinysrgb&h=350"
                avatar={avatar}
                name="Nissan Leaf 2018"
                userName="Electric Vehicle"
                description={
                  <span>
                    <br/>
                    <b>MSRP:</b> From $29,990
                    <br/>
                    <b>Range:</b> 151 mi battery-only
                    <br/>
                    <b>Battery:</b> 40 kWh lithium-ion
                    <br/>
                    <b>MPGe:</b> 125 city / 100 highway
                    <br/>
                    <b>Battery Charge Time:</b> 8h at 220V
                    <br />
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                title="Your Combustion Vehicle"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Year *",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g. 2018",
                          defaultValue: "",
                          disabled: true
                        },
                        {
                          label: "Make/Model *",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g. Renault Twingo",
                          defaultValue: "Nissan Sentra"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Home Address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "e.g. 1837 El Camino Ave"
                        },
                        {
                          label: "Work Address",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Work Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g. 2181 California Ave",
                        }
                      ]}
                    />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Vehicle
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
