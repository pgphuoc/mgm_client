import CardUser from '@/components/Anken/AnkenForm/CardUser/CardUser';
import CardUserAdd from '@/components/Anken/AnkenForm/CardUser/CardUserAdd';
import SearchInput from '@/components/UI/SearchInput/SearchInput';
import Box from '@/components/UI/Box/Box';
import Form from '@/components/UI/Form/Form';
import FormControl from '@/components/UI/Form/FromControl';
import InputForm from '@/components/UI/Form/InputForm';
import Tags from '@/components/UI/Tags/Tags';
import React from 'react';
import classes from './AnkenForm.module.css';
import FunctionsList from './FunctionsList/FunctionsList';

export default function AnkenForm() {
  return (
    <Box>
      <Form title="Create new anken">
        <div
          className={`${classes['form__group']} ${classes['form__group--double']}`}
        >
          <FormControl label="For: ">
            <Tags />
          </FormControl>

          <FormControl label="in: ">
            <InputForm placeholder="Typing project.." />
          </FormControl>
        </div>

        <div className={`${classes['form__group']} `}>
          <InputForm placeholder="Typing new anken name.." />
        </div>

        <div className={`${classes['form__group']} ${classes['form__anken']}`}>
          <div className={classes['anken-leader']}>
            <h2>Anken Leader</h2>
            <CardUser user="Phước Phạm" role="BAL" onRemove={() => {}} />
            <CardUserAdd />
          </div>
          <div className={classes['anken-member']}>
            <h2>Anken Member</h2>
            <div className={classes['anken-member--items']}>
              <div className={classes['anken-member--item']}>
                <CardUser user="Phước Phạm" role="BA" onRemove={() => {}} />
              </div>
              <div className={classes['anken-member--item']}>
                <CardUser user="Phước Phạm" role="BA" onRemove={() => {}} />
              </div>
              <div className={classes['anken-member--item']}>
                <CardUser user="Phước Phạm" role="BA" onRemove={() => {}} />
              </div>
              <div className={classes['anken-member--item']}>
                <CardUser user="Phước Phạm" role="BA" onRemove={() => {}} />
              </div>
              <div className={classes['anken-member--item']}>
                <CardUser user="Phước Phạm" role="BA" onRemove={() => {}} />
              </div>
              <div className={classes['anken-member--item']}>
                <CardUserAdd />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${classes['form__group']} ${classes['function__group']}`}
        >
          <h2>Project Functions</h2>
          <SearchInput />
          <FunctionsList />
          <FunctionsList />
          <FunctionsList />
        </div>
      </Form>
    </Box>
  );
}
