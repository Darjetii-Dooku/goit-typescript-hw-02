import { Formik, Form, Field, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";
import React from "react";
import { SearchBarProps } from "./Searchbar.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSetQuery }) => {
  const handleSubmit = (
    values: { query: string },
    actions: FormikHelpers<{ query: string }>
  ) => {
    onSetQuery(values.query);
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
