import {
  Button,
  DetailPage,
  Dropzone,
  Form,
  Grid,
  H1,
  Required,
  useDropzone,
  useField,
  useFormContext,
} from '@procore/core-react';
import React, { useEffect } from 'react';
import { FormSelectGroupOptions, FormSelectOptions } from '../../assets/formData/formData';
// import { useForm } from '../../hooks/useForm';
import './SelectionFormCreate.css';

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
        label="#"
        {...props}
        {...field}
        disabled
        tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
        colStart={7}
        colWidth={4}
      />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default function SelectionFormCreate() {
  const dropzoneState = useDropzone();

  return (
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
                colWidth={6}
              />
              <SectionNumber name="text" />
              <Form.DateSelect name="date" label="Date" colStart={11} />
            </Form.Row>
            <Form.Row>
              <Form.RichText name="richtext" colWidth={6} label="Selection Details" required />
            </Form.Row>
            <Grid.Row>
              <Grid.Col colStart={6}>
                <Dropzone isIconVisible={true} {...dropzoneState} />
              </Grid.Col>
            </Grid.Row>
            <Form.Row></Form.Row>
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
  );
}
