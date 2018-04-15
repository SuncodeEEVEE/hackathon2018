import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import { NavLink } from "react-router-dom";

class Dashboard extends Component {
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
            <Col lg={3} sm={6}>
              <NavLink
                to={'milesDriven'}
              >
                <StatsCard
                  bigIcon={<i className="pe-7s-car text-success" />}

                  style={{textDecorationColor: '#fff'}}
                  statsText="Miles Driven"
                  statsValue="420 Miles"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText={`Updated: ${new Date().toLocaleString()}`}
                />
              </NavLink>
            </Col>
            <Col lg={3} sm={6}>
              <NavLink
                to={'GasSavings'}
              >
                <StatsCard
                  bigIcon={<i className="pe-7s-paint-bucket text-info" />}
                  statsText="Gas Savings"
                  statsValue="$25.2"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText={`Updated: ${new Date().toLocaleString()}`}
                />
              </NavLink>
            </Col>
            <Col lg={3} sm={6}>
              <NavLink
                to={'TreesSaved'}
              >
                <StatsCard
                  bigIcon={<i className="pe-7s-sun text-warning" />}
                  statsText="Trees Saved"
                  statsValue="606"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText={`Updated: ${new Date().toLocaleString()}`}
                />
              </NavLink>
            </Col>
            <Col lg={3} sm={6}>
              <NavLink
                to={'EmissionsReduced'}
              >
                <StatsCard
                  bigIcon={<i className="pe-7s-cloud text-secondary" />}
                  statsText="Emissions Reduced"
                  statsValue="179.4 g/mi"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText={`Updated: ${new Date().toLocaleString()}`}
                />
              </NavLink>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
