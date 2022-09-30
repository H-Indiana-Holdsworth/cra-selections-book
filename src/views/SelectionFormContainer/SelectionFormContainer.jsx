import React, { useState } from 'react';
import { Breadcrumbs, DetailPage, Form } from '@procore/core-react';
import { FormInitialValues } from '../../assets/formData/formData';
import { useForm } from '../../hooks/useForm';
import * as Yup from 'yup';
import SelectionFormCreate from '../../components/SelectionFormCreate/SelectionFormCreate';
import SelectionFormRead from '../../components/SelectionFormRead/SelectionFormRead';

export default function SelectionFormContainer() {
  // Form states

  const [formFilled, setFormfilled] = useState(false);

  // const { section, onSelect } = useForm();

  const handleSubmit = (values) => {
    try {
      setFormfilled(true);
      console.log('Form Submitted! :>> ', values);
    } catch (error) {
      throw error;
    }
  };

  // const FormSchema = Yup.object().shape({
  //   text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  // });

  return (
    <div id="form-to-print" encType="text/richtext">
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
      >
        {(props) => (
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
              <SelectionFormCreate />
            </DetailPage.Main>
          </DetailPage>
        )}
      </Form>
    </div>
  );
}
