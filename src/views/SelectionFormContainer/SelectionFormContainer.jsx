import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Button, DetailPage, Form, useDropzone } from '@procore/core-react';
import { FormInitialValues } from '../../assets/formData/formData';
import * as Yup from 'yup';
import SelectionFormCreate from '../../components/SelectionFormCreate/SelectionFormCreate';

export default function SelectionFormContainer() {
  // Form state
  const [formFilled, setFormfilled] = useState(false);

  const handleSubmit = () => {
    try {
      setFormfilled(true);
    } catch (error) {
      throw error;
    }
  };

  // const FormSchema = Yup.object().shape({
  //   text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  // });

  return (
    // <div id="form-to-print">
    <Form
      view={formFilled ? 'read' : 'create'}
      // enableConfirmNavigation={true}
      initialValues={FormInitialValues}
      // validate={FormSchema}
      // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      // onSubmit={(values) => formValues={values} )}
      // onSubmit={(values) => console.log('values :>>', values)}
      // onSubmit={handleDownloadPdf}
      onSubmit={handleSubmit}
      initialErrors={{ 3: 'Wrong', 7: 'Required' }}
      class="form"
      enableReinitialize="true"
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

          {/* Render the form fields themselves */}
          <SelectionFormCreate />
        </DetailPage.Main>
      </DetailPage>
    </Form>
    // </div>
  );
}
