import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  company_name: yup.string().required(),
  contact_name: yup.string().required(),
  contact_title: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  region: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
