import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import ChartistGraph from "react-chartist";
import {
  dataSales,
  responsiveSales,
  legendSales,
  optionsTreesSaved,
  dataTreesSaved,
  legendMilesDriven
} from "variables/Variables.jsx";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class TreesSaved extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Trees Saved"
                category="Past Week"
                stats="Updated 6 minutes ago"
                content={
                  <div className="ct-chart">
                      <ChartistGraph
                        data={dataTreesSaved}
                        type="Line"
                        options={optionsTreesSaved}
                        responsiveOptions={responsiveSales}
                      />
                  </div>
                }
                  legend={
                    <div className="legend">{this.createLegend(legendMilesDriven)}</div>
                  }
              >
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TreesSaved;
