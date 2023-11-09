import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  industry: yup.string().nullable(),
  size: yup.number().integer().nullable(),
  name: yup.string().required(),
});
