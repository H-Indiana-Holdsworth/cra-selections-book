import {
  ActionBanner,
  Banner,
  H2,
  LinkButton,
  ListPage,
  Pagination,
  Search,
  Table,
  Tabs,
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
            <ToolHeader.Tabs>
              <Tabs.Tab active>
                <Tabs.Link href="/summary">Summary</Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab>
                <Tabs.Link href="/substitution-procedures">Substitution Procedures</Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab>
                <Tabs.Link href="/submittal-procedures">Submittal Procedures</Tabs.Link>
              </Tabs.Tab>
            </ToolHeader.Tabs>
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
                  <Table.HeaderCell sortable>Division Number</Table.HeaderCell>
                  <Table.HeaderCell sortable>Division Description</Table.HeaderCell>
                  <Table.HeaderCell sortable>Specification Section Number</Table.HeaderCell>
                </Table.HeaderRow>
              </Table.Header>

              <Table.Body>
                {/* Concrete */}
                <Table.BodyRow>
                  <Table.BodyCell>*</Table.BodyCell>
                  <Table.BodyCell>
                    <Table.LinkCell href="/concrete-finishing">Concrete Finishing</Table.LinkCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>03</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>Concrete</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>03 35 00</Table.TextCell>
                  </Table.BodyCell>
                </Table.BodyRow>

                {/* Masonry */}
                <Table.BodyRow>
                  <Table.BodyCell>*</Table.BodyCell>
                  <Table.BodyCell>
                    <Table.LinkCell href="/exterior-stone-cladding">
                      Exterior Stone Cladding
                    </Table.LinkCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>04</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>Masonry</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>04 42 00</Table.TextCell>
                  </Table.BodyCell>
                </Table.BodyRow>

                <Table.BodyRow>
                  <Table.BodyCell>*</Table.BodyCell>
                  <Table.BodyCell>
                    <Table.LinkCell href="/masonry-fireplaces">Masonry Fireplaces</Table.LinkCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>04</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>Masonry</Table.TextCell>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Table.TextCell>04 57 00</Table.TextCell>
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
