import React, { Component } from 'react';
import {ActionList, Popover, Button, AppProvider, Card, Frame, Label, List, Navigation, TopBar, DisplayText, Layout, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer,  ResourceList, TextStyle, Thumbnail} from '@shopify/polaris';
import DateComponent from 'C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/components/dashboard/DateComponent.js';

class Dashboard extends Component {

  state = {
  };

  render() {
    return (
      <AppProvider>
      <div style={{height: '250px'}}>
      <SkeletonPage primaryAction secondaryActions={2}>
          <Layout>
            <Layout.Section>

              <Card sectioned>
              <Card.Section>
                <p>BDonor</p>
              </Card.Section>
              </Card>

              <Card>
                <Card.Header
                  actions={[
                    {
                      content: 'Dates',
                    },
                    {
                      content: 'Add Event'
                    }
                  ]}
                >
                </Card.Header>
                <Card.Section>
                  <DateComponent/>
                </Card.Section>
                <Card.Section title="Appointments">
                  <p>
                    Will need to add Appointments in a list here, when they are clicked, they will navigate to the date on the calender, onlick will also show all the appoitments on the current day via a popup or whatever looks best // TODO
                  </p>
                </Card.Section>
              </Card>

              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>

              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>

            </Layout.Section>
            <Layout.Section secondary>
              <Card>
                <Card.Section>
                  <TextContainer>
                    <SkeletonDisplayText size="small" />
                    <SkeletonBodyText lines={2} />
                  </TextContainer>
                </Card.Section>
                <Card.Section>
                  <SkeletonBodyText lines={1} />
                </Card.Section>
              </Card>
              <Card subdued>
                <Card.Section>
                  <TextContainer>
                    <SkeletonDisplayText size="small" />
                    <SkeletonBodyText lines={2} />
                  </TextContainer>
                </Card.Section>
                <Card.Section>
                  <SkeletonBodyText lines={2} />
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>

      </SkeletonPage>
      </div>
      </AppProvider>
    );
  }
}

export default Dashboard;
