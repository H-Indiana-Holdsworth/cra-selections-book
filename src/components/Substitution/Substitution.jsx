import {
  Banner,
  Box,
  Breadcrumbs,
  Content,
  DetailPage,
  H1,
  InfoBanner,
  LinkButton,
  P,
  Title,
} from '@procore/core-react';
import React from 'react';
import '../Substitution/Substitution.css';

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
            <Box textAlign="left">
              <DetailPage.Section
                expandId={1}
                heading="Definitions and Procedures"
                subtext="This is what constitutes 'Substitutions' or 'Change Events', and the process for how to correctly make them. "
                initialIsOpen={true}
              >
                <DetailPage.Section
                  expandId={10}
                  heading="Substitutions/Change Events"
                  initialIsOpen={false}
                >
                  <ol>
                    <li>Approved selection changes</li>
                    <ul>
                      <li>
                        <P>Making changes to a fully approved selection in part or whole.</P>
                      </li>
                    </ul>
                    <li>Changes to Approved plans</li>
                    <ul>
                      <li>
                        <P>
                          Moving, adding, or changing any portion of the approved construction
                          documents. (i.e. moving a fireplace to a new location, adding/moving
                          windows or walls)
                        </P>
                      </li>
                    </ul>
                  </ol>
                </DetailPage.Section>

                <DetailPage.Section
                  expandId={11}
                  heading="Substitution/Change Event Procedures"
                  initialIsOpen={false}
                >
                  <ol>
                    <li>Procedure for changing an approved selection or an approved plan</li>
                    <ul list-style-type="lower-alpha">
                      <li>
                        <P>Label “Subject” as “Change Request”</P>
                      </li>
                      <li>
                        <P>Set ”Assignee” to appropriate HCI personnel</P>
                      </li>
                      <li>
                        <P>Adjust RFI due date to a week from creation</P>
                      </li>
                      <li>
                        <P>Assign “RFI Manager” to appropriate HCI personnel</P>
                      </li>
                      <li>
                        <P>Add appropriate personnel to “Distribution List”</P>
                      </li>
                      <li>
                        <P>Set “Responsible Contractor” to HCI</P>
                      </li>
                      <li>
                        <P>Set “RFI Stage” to course of construction</P>
                      </li>
                      <li>
                        <P>Include description or file of what is being changed</P>
                      </li>
                    </ul>
                    <DetailPage.Banner>
                      <InfoBanner>
                        <Banner.Content>
                          <Banner.Title>
                            For changing an approved <strong>PLAN</strong>
                          </Banner.Title>
                          <Banner.Body>
                            Follow all steps above, and <strong>also</strong> attach a marked up
                            plan with specific details of what is being moved, added, removed, or
                            changed.
                          </Banner.Body>
                        </Banner.Content>
                      </InfoBanner>
                    </DetailPage.Banner>
                    <br />
                    <li>Approved or Reject the revised submittal that you will receive from us</li>
                  </ol>
                </DetailPage.Section>
              </DetailPage.Section>

              <DetailPage.Section
                expandId={2}
                heading="Considerations"
                subtext="Considerations for the Owner to take into account."
                initialIsOpen={true}
              >
                <DetailPage.Section expandId={20} heading="Changes" initialIsOpen={false}>
                  <ol>
                    <li>
                      <P>
                        Submit RFI for change to approved selections or plans{' '}
                        <strong>as quickly as possible</strong> to HCI
                      </P>
                    </li>
                    <li>
                      <P>
                        Lead times for specific items may restrict ability to maintain project
                        schedule. HCI will notify if any impact exists
                      </P>
                    </li>
                  </ol>
                </DetailPage.Section>
              </DetailPage.Section>
            </Box>
          </DetailPage.Card>
        </DetailPage.Body>
      </DetailPage.Main>
    </DetailPage>
  );
}
