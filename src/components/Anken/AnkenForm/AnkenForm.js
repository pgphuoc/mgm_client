import Box from '@/components/UI/Box/Box';
import Form from '@/components/UI/Form/Form';
import FormGroup from '@/components/UI/Form/FormGroup';
import FormControl from '@/components/UI/Form/FromControl';
import React from 'react';
import classes from './AnkenForm.module.css';

export default function AnkenForm() {
  return (
    <Box>
      <Form title="Create new anken">
        <FormGroup doubleCol="true">
          <FormControl label="For: " value="System" />
          <FormControl label="in: " value="Project" />
        </FormGroup>
        <FormGroup>
          <FormControl label="First name: " value="PhuocPG" />
        </FormGroup>
      </Form>
    </Box>
  );
}
