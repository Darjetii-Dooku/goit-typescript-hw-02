import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
export const SearchBar = ({ onSetQuery }) => {
    const handleSubmit = (values) => {
        onSetQuery(values.query);
        console.log(values);
    }
  return (
    <header>
        <Formik initialValues={{query: ''}} onSubmit={handleSubmit}>
            <Form>
                <Field
                    className={css.input}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.button} type="submit">Search</button>
            </Form>
        </Formik>
    </header>
  );
};
