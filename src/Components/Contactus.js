import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from "react-bootstrap/esm/Container";

const Contactus = () => {
    const formik = useFormik({
        initialValues: {
            Full_Name: '',
            EmailId: '',
            Subject: '',
            Message: '',

        },
        validationSchema: yup.object({
            Full_Name: yup.string()
                .min(30, 'Not more than 30 characters')
                .required('Please Enter Full Name'),


            EmailId: yup.string()
                .required('Please Enter Valid EmailId'),

            Subject: yup.string()
                .required('Please Enter Subject'),

            Message: yup.string()
                .required('Please Enter Message'),


        }),
        onSubmit: values => {

            alert(JSON.stringify(values));
        },
    });


    return (
        <>
             <div  className='contactusdiv'>
     <Container className="contactus">
   <form onSubmit={formik.handleSubmit}>
   <h2>Contact Us</h2>
      <p>
         <label>Full Name : <input type="text" name="Full_Name"
            value={formik.values.Full_Name}
            {...formik.getFieldProps("Full_Name")}></input>
            {formik.touched.Full_Name && formik.errors.Full_Name ?
               <span style={{ color: 'red' }}>{formik.errors.Full_Name}</span> : null}</label>
      </p>    <p>
         <label>EmailId : <input type="text" name="EmailId"
            value={formik.values.EmailId}
            {...formik.getFieldProps("EmailId")}></input>
            {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}</label>
      </p>
      <p>
         <label>Subject: <input type="text" name="Subject"
            value={formik.values.Subject}
            {...formik.getFieldProps("Subject")}></input>
            {formik.touched.Subject&& formik.errors.Subject? <span style={{ color: 'red' }}>{formik.errors.Subject}</span> : null}</label>
      </p>   <p>
         <label>Message : <input type="text" name="Message"
            value={formik.values.Message}
            {...formik.getFieldProps("Message")}></input>
            {formik.touched.Message && formik.errors.Message ? <span style={{ color: 'red' }}>{formik.errors.Message}</span> : null}</label>
      </p>
      
      <button type="submit">Submit</button>
   </form>
   </Container>
   </div>
        </>
    );
};

export default Contactus;