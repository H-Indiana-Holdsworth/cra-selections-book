import {
  Breadcrumbs,
  Button,
  DetailPage,
  Form,
  H1,
  Required,
  useFormContext,
} from '@procore/core-react';
import React, { useState } from 'react';
import {
  FormInitialValues,
  FormSelectGroupOptions,
  FormSelectOptions,
} from '../../assets/formData/formData';
import { useForm } from '../../hooks/useForm';
import * as Yup from 'yup';
import './SelectionFormCreate.css';
import { PersistFormikValues } from 'formik-persist-values';

export default function SelectionFormCreate() {
  // Form states

  const [formfilled, setFormfilled] = useState(false);

  const { section, onSelect } = useForm();

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
  );
}
