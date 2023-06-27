import style from './Form.module.css';
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import * as emailjs from "emailjs-com";
import * as Swal from "sweetalert2";
import { Button} from 'antd';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Za krótkie imie, dodaj minimum trzy znaki!')
        .max(70, 'Za długie imie')
        .required('Wypełnij wymagane pole'),
    topic: Yup.string()
        .min(5, 'Za krótki temat, dodaj minimum pięć znaków!')
        .max(40, 'Za długi temat')
        .required('Dodaj temat'),
    email: Yup.string().email('Dodaj prawidlowy email')
        .required("Wypełnij wymagane pole")
        .test(
            "Validate Email",
            (value) => {
                const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(String(value).toLowerCase())
            },
        ),
    message: Yup.string()
        .min(10, 'Za krótka wiadomość, dodaj minimum dziesięć znaków!')
        .required('Wypełnij wymagane pole'),
    checked: Yup.boolean()
        .oneOf([true], "Pole jest wymagane")
});


const Forms = () => {
    const InputComponent = (props) => (
        <div><input className={style.inputs}  {...props} /></div>
    );
    const TextareaComponent = (props) => (
        <div><textarea className={style.textArea}  {...props} /></div>
    );
    const CheckboxComponent = (props) => (
        <div className={style.checkboxContainer}>
            <label className={style.checkboxLableStyle}>
                <input type="checkbox" className={style.checkboxStyle} {...props} />
                Wyrażam zgodę na przetwarzanie moich danych osobowych, celem otrzymania kontaktu zwrotnego od
                administratora strony natalliaTarka.pl
            </label>
        </div>
    );


    return (
        <>
            <Formik
                initialValues={{name: '', topic: '', email: '', message: '', checked: ''}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    try {
                        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_PUBLIC_KEY)
                            .then((result) => {

                                console.log(result.text);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Wiadomość została wysłana'
                                });
                                resetForm();
                                setSubmitting(false)
                            });
                    }
                    catch (error) {
                        console.log(error.text);
                        setSubmitting(false);
                        Swal.fire({
                            icon: 'error',
                            title: 'Ooops, coś poszło nie tak',
                            text: error.text,
                        })
                    }
                    resetForm();
                }}
            >
                {({
                      values, dirty, isSubmitting

                  }) => (
                    <Form>
                        <Field name="name" placeholder="name" type='text' as={InputComponent} required={true} className={style.input1}/>
                        <ErrorMessage component="div" className={style.error} name="name"/>
                        <Field name="topic" placeholder="topic" type='text' as={InputComponent}
                               required={true}/>
                        <ErrorMessage component="div" className={style.error} name="topic"/>
                        <Field name="email" placeholder="email" type='email' as={InputComponent} required={true}/>
                        <ErrorMessage component="div" className={style.error} name="email"/>
                        <Field name="message" placeholder="message text" as={TextareaComponent} required={true}/>
                        <ErrorMessage component="div" className={style.error2} name="message"/>
                        <Field
                            type="checkbox"
                            name="checked"
                            as={CheckboxComponent}
                            required={true}
                        />
                        <ErrorMessage component="div" className={style.error} name="checked"/>

                        <Button
                            onSubmit
                            htmlType="submit" className={style.buttonStyle} disabled={!dirty || isSubmitting} size='large' >
                            send message
                        </Button>
                    </Form>
                )}
            </Formik>
        </>

    )
};

export default Forms;