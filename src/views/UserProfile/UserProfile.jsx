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
import avatar1 from "assets/img/faces/car2.jpeg";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      submitAdd: false,
    };
  }

  createCard = () => {
    this.setState({
      submit: true
    })
  }

  createAddCard = () => {
    this.setState({
      submitAdd: true
    })
  }

  render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>

                 <div className="text-muted">
                   <b>Hi! Welcome to The Eevee Experiment.</b>
                   <br/>
                   By the end of the experiment, you will find out the amount of positive impact you can contribute to the world by just switching to an EV!
                   <br/>
                   <br/>
                   Let's begin by telling us more about you.
                   <br/>
                   <br/>
                </div>


            </Col>

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
            {
              this.state.submit && (
              <Col md={4}>
                <UserCard
                  bgImage="https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?auto=compress&cs=tinysrgb&h=350"
                  avatar={avatar1}
                  name="Nissan Sentra 2018"
                  userName="Conbustion Vehicle"
                  description={
                    <span>
                      <br/>
                      <b>MSRP:</b> From $16,990
                      <br/>
                      <b>Fuel Tank Capacity:</b> 13.2 gal
                      <br/>
                      <b>Horsepower:</b> 124 to 188 hp
                      <br/>
                      <b>MPG:</b> Up to 29 city / 37 highway
                      <br/>

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
            )}
            { !this.state.submit && (
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
                            defaultValue: "2018",
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


                      <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.createCard()}>
                        Add Vehicle
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
            )}

            {
              this.state.submitAdd && (
              <Col md={4}>
                <Card
                  title="Estimated Cost Savings Per Year"
                  content={
                    <h1>$570</h1>
                  }
                />
                <Button bsStyle="info" pullRight fill type="submit" href="#pablo">
                  Start Experiment!
                </Button>
              </Col>
            )}

            { this.state.submit && !this.state.submitAdd && (
              <Col md={8}>
                <Card
                  title="Estimate Cost Savings"
                  content={
                    <form>
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Home Address",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "e.g. 1837 El Camino Ave",
                            defaultValue: "37601-37661 Blacow Rd, Fremont"
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
                            defaultValue: "1330 Broadway, Oakland"
                          }
                        ]}
                      />
                      <Button bsStyle="info" pullRight fill type="submit" onClick={() => this.createAddCard()}>
                        Estimate Cost Savings
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
            )}

          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
