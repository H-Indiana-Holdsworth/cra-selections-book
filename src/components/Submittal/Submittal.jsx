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
                        <P>Here are the available tools:</P>
                      </li>
                      <ul>
                        <li>
                          <P>Documents</P>
                        </li>
                        <li>
                          <P>Drawings</P>
                        </li>
                        <li>
                          <P>Emails</P>
                        </li>
                        <li>
                          <P>Photos</P>
                        </li>
                        <li>
                          <P>RFIs</P>
                        </li>
                        <ul>
                          <li>
                            <P>
                              This is the tool that you will use to make a change request after you
                              have approved a submittal from HCI, or want to make any changes to the
                              architectural or structural plans
                            </P>
                          </li>
                        </ul>
                      </ul>
                    </ul>
                    <li>Submittals</li>
                    <ul>
                      <li>
                        <P>
                          HCI will create a submittals for you to view in Procore. They will contain
                          the proposed product price, model, color, and location. You will then be
                          able to review the submittal and choose whether to 'Approve' it or
                          'Reject' it.
                        </P>
                      </li>
                    </ul>
                  </ol>
                </DetailPage.Section>

                <DetailPage.Section
                  expandId={11}
                  heading="Types of Submittals and Definitions"
                  initialIsOpen={false}
                >
                  <ol>
                    <li>
                      <P>
                        <strong>Shop Drawing Submittal:</strong> Usually only for custom built
                        products. Written and graphic information that require comments and feedback
                        that will be returned as approved if no comments are needed, approved as
                        noted if minor changes are required, or rejected if requires substantial
                        changes.
                      </P>
                    </li>
                    <li>
                      <P>
                        <strong>Informational Submittal:</strong> Product specific information
                        pertaining manufacturer, model, color, dimensions.
                      </P>
                    </li>
                    <li>
                      <P>
                        <strong>Pricing Submittal: </strong> Pricing for any selection incorporated
                        into the project.
                      </P>
                    </li>
                    <li>
                      <P>
                        <strong>Finish Schedule Submittal: </strong> This will include information
                        from the table completed by the owner in the required specification
                        sections, with additional information added by HCI such as quantities, waste
                        factors, and any other information to be confirmed as needed.
                      </P>
                    </li>
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
