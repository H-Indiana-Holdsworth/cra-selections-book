import React, { useEffect, useState } from 'react';
import {
  Breadcrumbs,
  Button,
  DetailPage,
  Form,
  H1,
  Required,
  useField,
  useFormContext,
} from '@procore/core-react';
import {
  FormInitialValues,
  FormSelectGroupOptions,
  FormSelectOptions,
} from '../../assets/formData/formData';
import * as Yup from 'yup';
import SelectionFormCreate from '../../components/SelectionFormCreate/SelectionFormCreate';

// Dependent Field Example from Formik Docs
const SectionNumber = (props) => {
  const {
    values: { select },
    touched,
    setFieldValue,
  } = useFormContext();
  const { field, meta } = useField(props);

  useEffect(() => {
    // set the value of props, based on select
    if (touched.select) {
      setFieldValue(props.name, `${select.id}`);
    }
  }, [select, touched.select, setFieldValue, props.name]);

  return (
    <>
      <Form.Text
        name="text"
        label="Specification Section Number"
        {...props}
        {...field}
        disabled
        tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
        colStart={7}
      />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

// Dependent Field Example from Stack Overflow
// const DependentField = (props) => {
//   const { values, touched, setFieldValue } = useFormContext(); // get Formik state and helpers via React Context
//   const { field, meta } = useField(props); // get the props/info necessary for a Formik <Field> (vs just an <input>)

//   useEffect(() => {
//     // set the values for this field based on those of another
//     switch (values.select) {
//       case 'Windows':
//         setFieldValue(props.name, '08 50 00');
//         break;
//       case 'Door Hardware':
//         setFieldValue(props.name, '09 31 00');
//         break;
//       default:
//         setFieldValue(props.name, 'Earth');
//         break;
//     }
//   }, [values.select, touched, setFieldValue, props.name]); // make sure the component will update based on relevant changes

//   return (
//     <>
//       <Form.Text
//         name="text"
//         label="Specification Section Number"
//         {...props}
//         {...field}
//         disabled
//         tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
//         colStart={7}
//       />
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

export default function SelectionFormContainer() {
  // Form states

  const [formFilled, setFormfilled] = useState(false);

  const handleSubmit = () => {
    try {
      // setSection(id);
      setFormfilled(true);
      // console.log('Form Submitted! :>> ', id);
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
          <Form.Form>
            <DetailPage.Body>
              <DetailPage.Title>
                <H1>Make a Selection</H1>
              </DetailPage.Title>

              <DetailPage.Card>
                <DetailPage.Section heading="General Information">
                  <Form.Row>
                    <Form.Select
                      name="select"
                      label="Specification Section"
                      getGroup={(option) => option.groupAssociation}
                      groupGetId={(group) => group.uuid}
                      groupGetLabel={(group) => group.displayName}
                      options={FormSelectOptions}
                      optgroups={FormSelectGroupOptions}
                      // onSelect={onSelect}
                      colStart={1}
                    />

                    {/* <DependentField name="text" /> */}
                    <SectionNumber name="text" />
                    {/* <Form.Text
                        name="text"
                        label="Specification Section Number"
                        {...props}
                        {...field}
                        disabled
                        tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
                        colStart={7}
                      /> */}
                  </Form.Row>
                  <Form.Row>
                    <Form.DateSelect name="date" label="Date" colStart={1} />
                  </Form.Row>
                  <Form.Row>
                    <Form.RichText
                      name="richtext"
                      colWidth={12}
                      label="Selection Details"
                      required
                    />
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
    // </div>
  );
}
