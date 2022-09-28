// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import { Breadcrumbs, Button, DetailPage, Form, H1, Required } from '@procore/core-react';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import './SelectionForm.css';

export default function SelectionForm() {
  // Form.Select code and data

  const FormSelectOptions = [
    { id: '08 50 00', label: 'Windows', groupAssociation: 1 },
    { id: 2, label: 'Door Hardware', groupAssociation: 1 },
    { id: 3, label: 'Tiling', groupAssociation: 2 },
    { id: 4, label: 'Flooring', groupAssociation: 2 },
  ];

  const FormSelectGroupOptions = [
    { uuid: 1, displayName: 'Openings' },
    { uuid: 2, displayName: 'Finishes' },
  ];

  const FormInitialValues = {
    select: FormSelectOptions[0],
    text: 'yeyeyes;alfkjasd sdfgklsjda ;sldajf asdl;jf ',
  };

  // Form states

  const [section, setSection] = useState({ id: '' });
  const [formfilled, setFormfilled] = useState(false);

  const onSelect = ({ item }) => {
    setSection(item);
    parseInt(item.id);
  };
  console.log('section :>> ', typeof section.id);

  const handleSubmit = () => {
    try {
      setFormfilled(true);
    } catch (error) {
      throw error;
    }
  };

  // html2pdf code

  function handleCreatePdf() {
    const pdfForm = document.getElementById('form-to-print');
    html2pdf(pdfForm);
  }

  useEffect(() => {
    handleCreatePdf();

    console.log('Hello?');
  }, [formfilled]);

  return (
    <div id="form-to-print" encType="text/richtext">
      {!formfilled ? (
        <Form
          view="create"
          // enableConfirmNavigation={true}
          initialValues={FormInitialValues}
          // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          // onSubmit={handleDownloadPdf}
          onSubmit={handleSubmit}
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
                      {/* <div ref={printRef}> */}
                      <Form.Row>
                        <Form.Select
                          name="select"
                          label="Specification Section"
                          getGroup={(option) => option.groupAssociation}
                          groupGetId={(group) => group.uuid}
                          groupGetLabel={(group) => group.displayName}
                          options={FormSelectOptions}
                          optgroups={FormSelectGroupOptions}
                          // onChange={setSection}
                          onSelect={onSelect}
                          colStart={1}
                        />

                        <Form.Text
                          name="text"
                          label="Specification Section Number"
                          disabled
                          value={section.id}
                          tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
                          colStart={7}
                        />
                      </Form.Row>
                      <Form.Row>
                        <Form.Checkboxes
                          name="checkboxes"
                          label="Checkboxes"
                          options={window.FormSelectOptions}
                          colStart={1}
                        />
                        <Form.DateSelect name="date" label="Date" colStart={7} />
                      </Form.Row>
                      <Form.Row>
                        <Form.Text name="text" colWidth={12} label="Text" required />
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
      ) : (
        <Form
          view="read"
          // enableConfirmNavigation={true}
          // initialValues={FormInitialValues}
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
                      {/* <div ref={printRef}> */}
                      <Form.Row>
                        <Form.Select
                          name="select"
                          label="Specification Section"
                          getGroup={(option) => option.groupAssociation}
                          groupGetId={(group) => group.uuid}
                          groupGetLabel={(group) => group.displayName}
                          options={FormSelectOptions}
                          optgroups={FormSelectGroupOptions}
                          // onChange={setSection}
                          onSelect={onSelect}
                          colStart={1}
                        />

                        <Form.Text
                          name="text"
                          label="Specification Section Number"
                          disabled
                          value={section.id}
                          tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
                          colStart={7}
                        />
                      </Form.Row>
                      <Form.Row>
                        <Form.Checkboxes
                          name="checkboxes"
                          label="Checkboxes"
                          options={window.FormSelectOptions}
                          colStart={1}
                        />
                        <Form.DateSelect name="date" label="Date" colStart={7} />
                      </Form.Row>
                      <Form.Row>
                        <Form.Text name="text" colWidth={12} label="Text" required />
                      </Form.Row>
                    </DetailPage.Section>
                  </DetailPage.Card>
                </DetailPage.Body>
              </Form.Form>
            </DetailPage.Main>
          </DetailPage>
        </Form>
      )}
    </div>
  );
}
