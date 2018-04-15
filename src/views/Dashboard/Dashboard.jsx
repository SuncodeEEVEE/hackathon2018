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
                  statsValue="105 Miles"
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
                  statsValue="$1,345"
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
                  statsValue="23"
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
                  statsValue="-45"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText={`Updated: ${new Date().toLocaleString()}`}
                />
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                      <ChartistGraph
                        data={dataSales}
                        type="Line"
                        options={optionsSales}
                        responsiveOptions={responsiveSales}
                      />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              >
              </Card>
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
