import { Button, DetailPage, Form, H1, Required } from '@procore/core-react';
import { PersistFormikValues } from 'formik-persist-values';
import React from 'react';
import { FormSelectGroupOptions, FormSelectOptions } from '../../assets/formData/formData';
// import { useForm } from '../../hooks/useForm';
import './SelectionFormCreate.css';

export default function SelectionFormCreate() {
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
              />

              <Form.Text
                name="text"
                label="Specification Section Number"
                disabled
                // value={section.id}
                tooltip="You do not need to edit this number, it is used to link your selection to the correct Specification Section in Procore"
                colStart={7}
              />
            </Form.Row>
            <Form.Row>
              <Form.DateSelect name="date" label="Date" colStart={1} />
            </Form.Row>
            <Form.Row>
              <Form.RichText name="richtext" colWidth={12} label="Text" required />
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
          <PersistFormikValues name="selection-form" />
        </DetailPage.FooterActions>
      </DetailPage.Footer>
    </Form.Form>
  );
}
