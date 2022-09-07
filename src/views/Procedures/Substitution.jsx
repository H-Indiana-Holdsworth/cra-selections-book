import {
  ActionBanner,
  Banner,
  Box,
  Breadcrumbs,
  DetailPage,
  Flex,
  H1,
  H2,
  H3,
  InfoBanner,
  LinkButton,
  P,
  Title,
} from '@procore/core-react';
import React from 'react';

export default function Substitution() {
  return (
    <DetailPage width="md">
      <DetailPage.Main>
        <DetailPage.Header>
          <DetailPage.Breadcrumbs>
            <Breadcrumbs>
              <a href="/table-of-contents">
                <Breadcrumbs.Crumb>Table of Contents</Breadcrumbs.Crumb>
              </a>
              <a href="/substitution-procedures">
                <Breadcrumbs.Crumb active={true}>Substitution Procedures</Breadcrumbs.Crumb>
              </a>
            </Breadcrumbs>
          </DetailPage.Breadcrumbs>
          <DetailPage.Banner>
            <InfoBanner>
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
            </InfoBanner>
          </DetailPage.Banner>
          <DetailPage.Title>
            <Box textAlign="left">
              <Title>
                <Title.Text>
                  <H1>Substitution Procedures</H1>
                </Title.Text>
                <Title.Subtext>
                  Procedures for making changes to approved plans or selections
                </Title.Subtext>
              </Title>
            </Box>
          </DetailPage.Title>
        </DetailPage.Header>
        <DetailPage.Body>
          <DetailPage.Card>
            <DetailPage.Section heading="Major Section Heading">
              <P>yoyoyoyoyoyoyoyoyoy</P>
              <DetailPage.Section heading="Inner Heading 2">
                <P>yoyoyoyoyoyoyoyoyoyoyoy</P>
              </DetailPage.Section>
            </DetailPage.Section>
          </DetailPage.Card>
          <DetailPage.Card>
            <DetailPage.Banner>
              <ActionBanner>
                <Banner.Content>
                  <Banner.Title>By the Beard of Zeus</Banner.Title>
                  <Banner.Body>
                    Thunderbolts rain down from above, below, and the sides.
                  </Banner.Body>
                </Banner.Content>
              </ActionBanner>
            </DetailPage.Banner>
            <DetailPage.Section expandId={1} heading="Major Section Heading">
              <DetailPage.Section expandId={10} heading="Inner Heading 1" initialIsOpen={false}>
                <P>yoyoyoyoyoyoyoyoyoy</P>
              </DetailPage.Section>
              <DetailPage.Section expandId={11} heading="Inner Heading 2" initialIsOpen={true}>
                <P>yoyoyoyoyoyoyoyoyoy</P>
              </DetailPage.Section>
            </DetailPage.Section>
          </DetailPage.Card>
        </DetailPage.Body>
      </DetailPage.Main>
    </DetailPage>
  );
}
