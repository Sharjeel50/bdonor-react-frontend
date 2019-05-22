import React, { Component } from "react";
import DateComponent from "./DateComponent.js";
import HospitalListsComponent from "./HospitalList.js";
import GoogleMaps from "./GoogleMapsComponent.js";
import DonorChartComponent from './DonorChart.js'
import {
  ActionList,
  Popover,
  Button,
  AppProvider,
  Card,
  Frame,
  Label,
  List,
  Navigation,
  TopBar,
  DisplayText,
  Layout,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
  ResourceList,
  TextStyle,
  Thumbnail
} from "@shopify/polaris";


class Dashboard extends Component {
  state = {};

  render() {
    return (
      <AppProvider>
        <div style={{ height: "250px" }}>
          <SkeletonPage primaryAction secondaryActions={2}>
            <Layout>
              <Layout.Section>
                <Card>
                  <Card.Header
                    actions={[
                      {
                        content: "Dates"
                      },
                      {
                        content: "Add Event"
                      }
                    ]}
                  />
                  <Card.Section>
                    <DateComponent />
                  </Card.Section>
                  <Card.Section title="Appointments">
                    <p>
                      Will need to add Appointments in a list here, when they
                      are clicked, they will navigate to the date on the
                      calender, onlick will also show all the appoitments on the
                      current day via a popup or whatever looks best // TODO
                    </p>
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section>
                <Card>
                  <HospitalListsComponent />
                </Card>
              </Layout.Section>

              <Layout.Section>

                <Card>
                <Card.Section>
                <p>
                  Blood Donors
                </p>
                </Card.Section>
                  <DonorChartComponent />
                </Card>
              </Layout.Section>
            </Layout>
            <Layout.Section>
              <Card title="Donors">
                <Card.Section>
                  <TextStyle variation="subdued" />
                </Card.Section>
                <GoogleMaps />
              </Card>
            </Layout.Section>
          </SkeletonPage>
        </div>
      </AppProvider>
    );
  }
}

export default Dashboard;
