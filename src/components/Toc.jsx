import {
  ActionBanner,
  Banner,
  H2,
  LinkButton,
  ListPage,
  Pagination,
  Search,
  Table,
  ToolHeader,
} from '@procore/core-react';
import React from 'react';

export default function Toc() {
  return (
    <ListPage>
      <ListPage.Main>
        <ListPage.ToolHeader>
          <ToolHeader>
            <ToolHeader.Title>Selections Book</ToolHeader.Title>
          </ToolHeader>
        </ListPage.ToolHeader>

        <ListPage.Banner>
          <ActionBanner>
            <Banner.Content>
              <Banner.Title>Need Help?</Banner.Title>
              <Banner.Body>
                Call Indy at (928) 899-2714 with any questions, or click the button to send an
                email.
              </Banner.Body>
            </Banner.Content>
            <Banner.Action>
              <LinkButton href="mailto:indy@holdsworthconstruction.com">Email</LinkButton>
            </Banner.Action>
          </ActionBanner>
        </ListPage.Banner>

        <ListPage.ContentControls>
          <ListPage.Control search>
            <Search placeholder="Search" />
          </ListPage.Control>
          <ListPage.Control block>
            <H2 padding="lg" style={{ background: '#f5f5f5' }}>
              Filters
            </H2>
          </ListPage.Control>
        </ListPage.ContentControls>

        <ListPage.ContentControls>
          <ListPage.Control>
            <H2 padding="lg" style={{ background: '#f5f5f5' }}>
              Bulk Actions
            </H2>
          </ListPage.Control>
          <ListPage.Control alignRight>
            <Pagination items={2334} perPage={150} activePage={1} />
          </ListPage.Control>
        </ListPage.ContentControls>

        <ListPage.Body>
          <Table.Container>
            <Table>
              <Table.Header>
                <Table.HeaderRow>
                  <Table.HeaderCell variant="snugfit">*</Table.HeaderCell>
                  <Table.HeaderCell sortable variant="asc">
                    Selection Section
                  </Table.HeaderCell>
                  <Table.HeaderCell sortable>Specification Section Number</Table.HeaderCell>
                </Table.HeaderRow>
              </Table.Header>

              <Table.Body>
                <Table.BodyRow>
                  <Table.BodyCell>*</Table.BodyCell>
                  <Table.BodyCell>
                    <Table.LinkCell href="/">Windows</Table.LinkCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>08 50 00</Table.TextCell>
                  </Table.BodyCell>
                </Table.BodyRow>
              </Table.Body>
            </Table>
          </Table.Container>
        </ListPage.Body>

        <ListPage.ContentControls>
          <ListPage.Control alignRight>
            <Pagination items={2334} perPage={150} activePage={1} />
          </ListPage.Control>
        </ListPage.ContentControls>
      </ListPage.Main>
    </ListPage>
  );
}
