// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import { Box, Breadcrumbs, Button, DetailPage, Form, H1, Required } from '@procore/core-react';
import React from 'react';
import './SelectionForm.css';

export default function SelectionForm() {
  // const printRef = React.useRef();

  // const handleDownloadPdf = async () => {
  //   // PDF logic from: https://www.robinwieruch.de/react-component-to-pdf/

  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //   pdf.save('print.pdf');
  // };

  // const handleClick = async () => {
  //   try {
  //     const resp = await fetch(
  //       `.netlify/functions/selection?token=eyJhbGciOiJFUzUxMiJ9.eyJhbXIiOltdLCJhaWQiOiIyNjNkNGM3M2Y3Yjc0MWRhMDQ3ODY0ZDMxMWYzMmUwYzUzODM3M2ExZWU0ZDMwMGRlMWVjMTBjYThlOWE4YmRiIiwiYW91aWQiOm51bGwsImFvdXVpZCI6bnVsbCwiZXhwIjoxNjYyMDY2Mjk4LCJzaWF0IjoxNjYyMDU5MDk4LCJ1aWQiOjkyMjA5LCJ1dWlkIjoiMzVlY2M3NmYtZTViMS00MmI0LTg2MzctNWM3N2ZlMDliNjg3In0.AW1MrfC257wLFylAQS1TW3kFwrDi0LZzHt4p62VkF1waJegKqmz3Ks_IdhU7xleUnA1Ft8f066D0rla7c_oqTGljAZJu8KRvKzTyKU9ufDCZ_urvad2uy6YDPXR2dnQ3D97eiMIJ9aaWSVV3szz_J85Ge0fyGB6eZOM1FjlxdnG5-CdS`
  //     );
  //     return resp;
  //   } catch (error) {}
  // };

  // <div>
  // <button onClick={handleClick}>Create Submittal!</button>

  //   <button type="button" onClick={handleDownloadPdf}>
  //     Download as PDF.
  //   </button>

  //   <div>I will not be in the PDF.</div>
  //   <div ref={printRef}>I will be in the PDF.</div>
  // </div>
  return (
    <>
      <Form
        view="create"
        // enableConfirmNavigation={true}
        initialValues={window.FormInitialValues}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        initialErrors={{ 3: 'Wrong', 7: 'Required' }}
        class="form"
      >
        <DetailPage>
          <DetailPage.Main>
            <DetailPage.Header transparent>
              <DetailPage.Breadcrumbs>
                <Breadcrumbs>
                  <a href="/table-of-contents">
                    <Breadcrumbs.Crumb>Table of Contents</Breadcrumbs.Crumb>
                  </a>

                  <a href="/need-dynamic-section-here">
                    <Breadcrumbs.Crumb>Some Section</Breadcrumbs.Crumb>
                  </a>
                  <Breadcrumbs.Crumb active={true}>Create Selection</Breadcrumbs.Crumb>
                </Breadcrumbs>
              </DetailPage.Breadcrumbs>
            </DetailPage.Header>
            <Form.Form>
              <DetailPage.Body>
                <DetailPage.Title>
                  <H1>Make a Selection</H1>
                </DetailPage.Title>
                <DetailPage.Card>
                  <DetailPage.Section heading="General Information">
                    <Form.Row>
                      <Form.Text name="text" label="Text" colStart={1} />
                      <Form.Number
                        name="number"
                        label="Number"
                        required
                        tooltip="An example tooltip for any field, this value goes directly to the Tooltip overlay prop"
                        colStart={7}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Form.Select
                        name="select"
                        label="Select"
                        options={window.FormSelectOptions}
                        colStart={1}
                      />
                      <Form.MultiSelect
                        name="multiselect"
                        label="MultiSelect, With A Longer Label For This Multiselect Did You Read All Of The Label Yet"
                        options={window.FormSelectOptions}
                        colStart={7}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Form.Select
                        name="select"
                        label="Select with Groups"
                        getGroup={(option) => option.groupAssociation}
                        groupGetId={(group) => group.uuid}
                        groupGetLabel={(group) => group.displayName}
                        options={window.FormSelectOptions}
                        optgroups={window.FormSelectGroupOptions}
                      />
                      <Form.PillSelect
                        name="pillselect"
                        label="Status"
                        options={window.FormPillSelectOptions}
                        colStart={7}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Form.TieredSelect
                        name="tieredselect"
                        label="Tiered Select"
                        options={window.FormTieredSelectOptions}
                        colStart={1}
                      />
                      <Form.GroupSelect
                        name="groupselect"
                        label="Group Select for Distribution"
                        options={window.FormGroupSelectOptions}
                        groups={window.FormGroupSelectGroups}
                        colStart={7}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Form.Checkbox name="checkbox" label="Checkbox" colStart={1} />
                      <Form.DateSelect name="date" label="Date" colStart={7} />
                    </Form.Row>
                    <Form.Row>
                      <Form.TextArea name="textarea" label="Textarea" />
                    </Form.Row>
                    <Form.Row>
                      <Form.Checkboxes
                        name="checkboxes"
                        label="Checkboxes"
                        options={window.FormSelectOptions}
                        colStart={1}
                      />
                      <Form.RadioButtons
                        name="radiobuttons"
                        label="Radio Buttons"
                        options={window.FormSelectOptions}
                        colStart={7}
                      />
                    </Form.Row>
                    <Form.Row>
                      <Form.Currency name="currency" label="Currency" />
                    </Form.Row>
                    <Form.Row>
                      <Form.RichText name="richtext" colWidth={12} label="Richtext" />
                    </Form.Row>
                  </DetailPage.Section>
                </DetailPage.Card>
              </DetailPage.Body>
              <DetailPage.Footer>
                <DetailPage.FooterNotation>
                  <Required showLabel textAlign="right" />
                </DetailPage.FooterNotation>
                <DetailPage.FooterActions>
                  <Button variant="secondary">Secondary</Button>
                  <Button type="submit">Submit</Button>
                </DetailPage.FooterActions>
              </DetailPage.Footer>
            </Form.Form>
          </DetailPage.Main>
        </DetailPage>
      </Form>

      {/* <Form view="create" initialErrors={{ 3: 'Wrong', 7: 'Required' }}>
        <DetailPage>
          <DetailPage.Main>
            <DetailPage.Header transparent>
              <DetailPage.Breadcrumbs>
                <Breadcrumbs>
                  <a href="#/react/components/breadcrumbs/home">
                    <Breadcrumbs.Crumb>Universe</Breadcrumbs.Crumb>
                  </a>
                  <Breadcrumbs.Crumb active={true}>Create Galaxy</Breadcrumbs.Crumb>
                </Breadcrumbs>
              </DetailPage.Breadcrumbs>
            </DetailPage.Header>
            <Form.Form>
              <DetailPage.Body>
                <DetailPage.Title>
                  <H1>Create Galaxy</H1>
                </DetailPage.Title>
                <DetailPage.Banner>
                  <Form.ErrorBanner item="Galaxy" />
                </DetailPage.Banner>
                <DetailPage.Card>
                  <DetailPage.Section heading="General Information">
                    <Form.Row>
                      <Form.Text name="1" label="#" />
                      <Form.Text name="2" label="Name" colStart={7} />
                    </Form.Row>
                    <DetailPage.Section heading="Details">
                      <Form.Row>
                        <Form.Number name="3" label="Alpha" step={100} />
                        <Form.Text name="4" label="Beta" colStart={7} />
                      </Form.Row>
                      <Form.Row>
                        <Form.Text name="5" label="Cat" />
                        <Form.Text name="6" label="Dog" colStart={7} />
                      </Form.Row>
                    </DetailPage.Section>
                  </DetailPage.Section>
                </DetailPage.Card>
                <DetailPage.Card>
                  <DetailPage.Section>
                    <Form.Row>
                      <Form.Checkbox
                        name="7"
                        label="I agree to the universal convention of creating new galaxies."
                        colWidth={12}
                        required
                      />
                    </Form.Row>
                  </DetailPage.Section>
                </DetailPage.Card>
              </DetailPage.Body>
              <DetailPage.Footer>
                <DetailPage.FooterNotation>
                  <Required showLabel />
                </DetailPage.FooterNotation>
                <DetailPage.FooterActions>
                  <Button variant="secondary">Secondary</Button>
                  <Button type="submit">Primary</Button>
                </DetailPage.FooterActions>
              </DetailPage.Footer>
            </Form.Form>
          </DetailPage.Main>
        </DetailPage>
      </Form> */}

      {/* <Form>
        <Form.Form>
          <Form.Row>
            <Form.Text name="text" label="colStart 1 colWidth 6" colStart={1} colWidth={6} />
            <Form.Text name="text" label="colStart 7 colWidth 6" colStart={7} colWidth={6} />
          </Form.Row>
          <Form.Row>
            <Form.Text name="text" label="colStart 1 colWidth 12" colStart={1} colWidth={12} />
          </Form.Row>
        </Form.Form>
      </Form> */}
    </>
  );
}
