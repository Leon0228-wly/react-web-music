import React,{ memo } from 'react'
import type { FC, ReactNode} from 'react'
import "@cloudscape-design/global-styles/index.css";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Link from "@cloudscape-design/components/link";
import Table from "@cloudscape-design/components/table";
import {TabeleWrapper,TextWrapper} from './style'

interface TableItem {
  name: string;
  alt: string;
  description: string;
  type: string;
  size: string;
}

const TableTest: FC = () => {
    const [
        selectedItems,
        setSelectedItems
      ] = React.useState<TableItem[]>([{ 
        name: "Item 2", 
        alt: "Second", 
        description: "This is the second item", 
        type: "1B", 
        size: "Large" 
      }]);
      return (
        <TabeleWrapper>
          <Table
            renderAriaLive={({
              firstIndex,
              lastIndex,
              totalItemsCount
            }) =>
              `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
            }
            onSelectionChange={({ detail }) =>
              setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
              selectionGroupLabel: "Items selection",
              allItemsSelectionLabel: () => "select all",
              itemSelectionLabel: ({ selectedItems }, item) =>
                item.name
            }}
            columnDefinitions={[
              {
                id: "variable",
                header: "Variable name",
                cell: item => <Link href="#" data-testid="item-name">{item.name}</Link>,
                sortingField: "name",
                isRowHeader: true
              },
              {
                id: "value",
                header: "Text value",
                cell: item => item.alt,
                sortingField: "alt"
              },
              {
                id: "type",
                header: "Type",
                cell: item => <TextWrapper>{item.type}</TextWrapper>
              },
              {
                id: "description",
                header: "Description",
                cell: item => (
                  <span data-testid="description-cell">
                    {item.description}
                  </span>
                )
              }
            ]}
            columnDisplay={[
              { id: "variable", visible: true },
              { id: "value", visible: true },
              { id: "type", visible: true },
              { id: "description", visible: true }
            ]}
            enableKeyboardNavigation
                      items={[
              {
                name: "Item 1",
                alt: "First",
                description: "This is the first item",
                type: "1A",
                size: "Small"
              },
              {
                name: "Item 2",
                alt: "Second",
                description: "This is the second item",
                type: "1B",
                size: "Large"
              },
              {
                name: "Item 3",
                alt: "Third",
                description: "-",
                type: "1A",
                size: "Large"
              },
              {
                name: "Item 4",
                alt: "Fourth",
                description: "This is the fourth item",
                type: "2A",
                size: "Small"
              },
              {
                name: "Item 5",
                alt: "-",
                description:
                  "This is the fifth item with a longer description",
                type: "2A",
                size: "Large"
              },
              {
                name: "Item 6",
                alt: "Sixth",
                description: "This is the sixth item",
                type: "1A",
                size: "Small"
              }
            ] as TableItem[]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No resources</b>
                  <Button>Create resource</Button>
                </SpaceBetween>
              </Box>
            }
            filter={
              <TextFilter
                filteringPlaceholder="Find resources"
                filteringText=""
                countText="0 matches"
              />
            }
            header={
              <Header
                counter={
                  selectedItems.length
                    ? "(" + selectedItems.length + "/10)"
                    : "(10)"
                }
              >
                自定义表单
              </Header>
            }
            pagination={
              <Pagination currentPageIndex={1} pagesCount={2} />
            }
            preferences={
              <CollectionPreferences
                title="Preferences"
                confirmLabel="Confirm"
                cancelLabel="Cancel"
                preferences={{
                  pageSize: 10,
                  contentDisplay: [
                    { id: "variable", visible: true },
                    { id: "value", visible: true },
                    { id: "type", visible: true },
                    { id: "description", visible: true }
                  ]
                }}
                pageSizePreference={{
                  title: "Page size",
                  options: [
                    { value: 10, label: "10 resources" },
                    { value: 20, label: "20 resources" }
                  ]
                }}
                wrapLinesPreference={{}}
                stripedRowsPreference={{}}
                contentDensityPreference={{}}
                contentDisplayPreference={{
                  options: [
                    {
                      id: "variable",
                      label: "Variable name",
                      alwaysVisible: true
                    },
                    { id: "value", label: "Text value" },
                    { id: "type", label: "Type" },
                    { id: "description", label: "Description" }
                  ]
                }}
                stickyColumnsPreference={{
                  firstColumns: {
                    title: "Stick first column(s)",
                    description:
                      "Keep the first column(s) visible while horizontally scrolling the table content.",
                    options: [
                      { label: "None", value: 0 },
                      { label: "First column", value: 1 },
                      { label: "First two columns", value: 2 }
                    ]
                  },
                  lastColumns: {
                    title: "Stick last column",
                    description:
                      "Keep the last column visible while horizontally scrolling the table content.",
                    options: [
                      { label: "None", value: 0 },
                      { label: "Last column", value: 1 }
                    ]
                  }
                }}
              />
            }
          />
        </TabeleWrapper>
      );
      
}

export default memo(TableTest)