import React, { Component } from 'react';
import {ActionList, AppProvider, Card, Frame, Label, List, Navigation, TopBar,DisplayText, Layout, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer} from '@shopify/polaris';
import DateComponent from 'C:/Users/Sharjeel Jan/Desktop/bdonor-frontend/src/components/dashboard/dateComponent.js';

class Dashboard extends Component {

  state = {
    userMenuOpen: false,
    searchActive: false,
    searchText: '',
  };

  render() {

    const { state, handleSearchChange, handleSearchResultsDismiss, toggleUserMenu } = this;

    const {userMenuOpen, searchText, searchActive} = state;

    const theme = {
      colors: {
        topBar: {
          background: '#357997',
        },
      },
      logo: {
        width: 124,
        topBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999'
      },
    };

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'View Profile'}],
          },
        ]}
        name="User"
        detail="User test"
        initials="D"
        open={userMenuOpen}
        onToggle={toggleUserMenu}
      />
    );

    const searchResultsMarkup = (
      <Card>
        <ActionList
          items={[
            {content: 'Hospitals'},
            {content: 'Hospitalss'},
          ]}
        />
      </Card>
    );

    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchText}
        placeholder="Search"
      />
    );

    const topBarMarkup = (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={() => {
          console.log('toggle navigation visibility');
        }}
      />
    );

    return (
      <div style={{height: '250px'}}>
        <AppProvider theme={theme}>
          <Frame topBar={topBarMarkup} />
          <SkeletonPage primaryAction secondaryActions={2} breadcrumbs={true} fullWidth={true} singleColumn={false}>
            <Layout>
              <Layout.Section>
                <Card sectioned>
                  <SkeletonBodyText />
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
        </AppProvider>
      </div>
    );
  }

  toggleUserMenu = () => {
    this.setState(({userMenuOpen}) => ({userMenuOpen: !userMenuOpen}));
  };

  handleSearchResultsDismiss = () => {
    this.setState(() => {
      return {
        searchActive: false,
        searchText: '',
      };
    });
  };

  handleSearchChange = (value) => {
    this.setState({searchText: value});
    if (value.length > 0) {
      this.setState({searchActive: true});
    } else {
      this.setState({searchActive: false});
    }
  };
}

export default Dashboard;
