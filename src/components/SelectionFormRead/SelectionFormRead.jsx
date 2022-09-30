import { Breadcrumbs, DetailPage, Form, H1 } from '@procore/core-react';
import html2pdf from 'html2pdf.js';
import React, { useEffect } from 'react';
import { FormSelectGroupOptions, FormSelectOptions } from '../../assets/formData/formData';

export default function SelectionFormRead() {
  //   const { section } = useForm();
  // html2pdf code

  function handleCreatePdf() {
    const pdfForm = document.getElementById('form-to-print');
    html2pdf(pdfForm);
  }

  useEffect(() => {
    handleCreatePdf();

    console.log('Hello?');
  }, []);

  return (
    <div>
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
                      colStart={1}
                    />

                    <Form.Text
                      name="text"
                      label="Specification Section Number"
                      disabled
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
    </div>
  );
}
