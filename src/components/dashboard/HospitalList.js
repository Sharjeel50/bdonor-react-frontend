import React, { Component } from "react";
import {
  Avatar,
  Card,
  FilterType,
  Label,
  List,
  ResourceList,
  Select,
  TextField,
  TextStyle
} from "@shopify/polaris";

class HospitalResourceList extends Component {
  state = {
    selectedItems: [],
    sortValue: "DATE_MODIFIED_DESC",
    searchValue: ""
  };
  handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  handleSelectionChange = selectedItems => {
    this.setState({ selectedItems });
  };
  renderItem = item => {
    const { id, url, name, location, latestOrderUrl } = item;
    const media = <Avatar customer size="medium" name={name} />;
    const shortcutActions = latestOrderUrl
      ? [{ content: "View Donor Requests", url: latestOrderUrl }]
      : null;

    return (
      <ResourceList.Item
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
        shortcutActions={shortcutActions}
        persistActions
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceList.Item>
    );
  };

  render() {
    const resourceName = {
      singular: 'Hospital',
      plural: 'Hospitals',
    };

    const items = [                          // Will need to change this to all hospitals
      {
        id: 341,
        url: "customers/341",
        name: "Mae Jemison",
        location: "Decatur, USA",
        latestOrderUrl: "orders/1456"
      },
      {
        id: 256,
        url: "customers/256",
        name: "Ellen Ochoa",
        location: "Los Angeles, USA",
        latestOrderUrl: "orders/1457"
      },
      {
        id: 256,
        url: "customers/256",
        name: "Ellen Ochoa",
        location: "Los Angeles, USA",
        latestOrderUrl: "orders/1457"
      }
    ];
    const promotedBulkActions = [
      {
        content: "View Donor Requests",
        onAction: () => console.log("Todo: implement bulk edit")
      }
    ];
    const bulkActions = [
      {
        content: "Remove tags",
        onAction: () => console.log("Todo: implement bulk remove tags")
      },
      {
        content: "Unsee Hospitals",
        onAction: () => console.log("Todo: implement bulk delete")
      }
    ];
    const filters = [
      {
        key: "orderCountFilter",
        label: "Number of orders",
        operatorText: "is greater than",
        type: FilterType.TextField
      },
      {
        key: "accountStatusFilter",
        label: "Account status",
        operatorText: "is",
        type: FilterType.Select,
        options: ["Enabled", "Invited", "Not invited", "Declined"]
      }
    ];
    const filterControl = (
      <ResourceList.FilterControl
        filters={filters}
        appliedFilters={this.state.appliedFilters}
        onFiltersChange={this.handleFiltersChange}
        searchValue={this.state.searchValue}
        onSearchChange={this.handleSearchChange}
        additionalAction={{
          content: "Save",
          onAction: () => console.log("New filter saved")
        }}
      />
    );
    return (
      <Card>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={this.renderItem}
          selectedItems={this.state.selectedItems}
          onSelectionChange={this.handleSelectionChange}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
          filterControl={filterControl}
        />
      </Card>
    );
  }
}

export default HospitalResourceList;
