import {
  Banner,
  Box,
  Breadcrumbs,
  DetailPage,
  H1,
  InfoBanner,
  LinkButton,
  P,
  Title,
} from '@procore/core-react';
import React from 'react';
import project_tools from '../../assets/project_tools.jpeg';
import './Submittal.css';

export default function Submittal() {
  return (
    <DetailPage width="md">
      <DetailPage.Main>
        <DetailPage.Header>
          <DetailPage.Breadcrumbs>
            <Breadcrumbs>
              <a href="/table-of-contents">
                <Breadcrumbs.Crumb>Table of Contents</Breadcrumbs.Crumb>
              </a>
              <a href="/submittal-procedures">
                <Breadcrumbs.Crumb active={true}>Submittal Procedures</Breadcrumbs.Crumb>
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
                  <H1>Submittal Procedures</H1>
                </Title.Text>
                <Title.Subtext>
                  Procedures for how HCI will use the 'Submittals' tool within Procore to process
                  your selections.
                </Title.Subtext>
              </Title>
            </Box>
          </DetailPage.Title>
        </DetailPage.Header>

        <DetailPage.Body>
          <DetailPage.Card>
            <Box textAlign="left">
              <DetailPage.Section expandId={1} heading="Summary" initialIsOpen={true}>
                <DetailPage.Section
                  expandId={10}
                  heading="Tools for managing your project"
                  initialIsOpen={false}
                >
                  <ol>
                    <li>
                      At the start of your project HCI will send a link that will be used to create
                      your login for your project in Procore. This is the software that will be used
                      to coordinate selections, submittals, changes, project progress, and Photos.
                      Below are the tools that will be available for managing your project.
                    </li>
                    <ul>
                      <li>
                        <P>Making changes to a fully approved selection in part or whole.</P>
                      </li>
                    </ul>
                    <li>
                      In Procore, the tools can be accessed from the Project Tools drop-down menu
                      button. See example below:
                      <img src={project_tools} alt="Tools" />
                    </li>
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
