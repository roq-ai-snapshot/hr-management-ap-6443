import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  company_name: yup.string().required(),
  business_type: yup.string().required(),
  founding_date: yup.date().required(),
  country: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
