import * as Yup from 'yup';

export const validateEmail = (required = true, min = 2, max = 255) => {
  let schema = Yup.string()
    .email('Invalid email address!')
    .min(min, 'Email addresses must be 2 characters or more!')
    .max(max, 'Email addresses must be 255 characters or less!');
  if (required) {
    schema = schema.required('A valid email is required!');
  }
  return schema;
};

export const validateString = (
  required = true,
  min = 2,
  max = 255,
  message = 'A value is required!'
) => {
  let schema = Yup.string()
    .min(min, 'Value must be ' + min + ' characters or more!')
    .max(max, 'Value must be ' + max + ' characters or less!');
  if (required) {
    schema = schema.required(message);
  }
  return schema;
};

export const validateCheckbox = (
  required = true,
  min = 1,
  max = 100,
  message = 'A value is required!'
) => {
  let schema = Yup.array().min(min, message).max(max, message);
  if (required) {
    schema = schema.required(message);
  }
  return schema;
};

export const validateUpload = (
  msg = 'A value is required!',
  required = true
) => {
  if (required) {
    return Yup.object().shape({
      id: Yup.string().required(msg),
      url: Yup.string().required(msg)
    });
  } else {
    return Yup.object().shape({
      id: Yup.string(),
      url: Yup.string()
    });
  }
};

export const validateAutoComplete = (msg = 'Please select a value!') => {
  return Yup.object().shape({
    value: Yup.string().required(msg),
    text: Yup.string().required(msg)
  });
};

export const validateAddress = (msg = 'Please select a valid address!') => {
  return Yup.object()
    .typeError(msg)
    .shape({
      longitude: Yup.string().min(3, msg).required(msg),
      latitude: Yup.string().min(3, msg).required(msg),
      text: Yup.string().required(msg)
    });
};

export const validateSelect = (required = true) => {
  let schema = Yup.string();
  if (required) {
    schema = schema.required('Please select a value!');
  }
  return schema;
};

export const validateNumber = (required = true, min = 2, max = 255) => {
  let schema = Yup.number()
    .typeError('A valid number is required!')
    .min(min, 'Value must be greater than ' + min)
    .max(max, 'Value must be lesser than ' + max);
  if (required) {
    schema = schema.required('A valid number is required!');
  }
  return schema;
};

export const validateLongNumber = (required = true) => {
  let schema = Yup.number().typeError('A valid number is required!');
  if (required) {
    schema = schema.required('A valid number is required!');
  }
  return schema;
};

export const validateMoney = (required = true) => {
  const moneyRegExp = /^[0-9]\d*(((,\d{3}){1})*(\.\d{0,2})?)$/;
  let schema = Yup.string().matches(moneyRegExp, 'A valid amount is required!');
  if (required) {
    schema = schema.required('A valid amount is required!');
  }
  return schema;
};

export const validatePhone = (required = true) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let schema = Yup.string().matches(phoneRegExp, 'Phone number is not valid');
  if (required) {
    schema = schema.required('A valid phone number is required!');
  }
  return schema;
};

export const validatePassword = (
  useStrict = true,
  required = true,
  min = 6,
  max = 50
) => {
  let schema = Yup.string()
    .min(min, 'Passwords must be 6 characters or more!')
    .max(max, 'Passwords must be 50 characters or less!');
  if (useStrict) {
    schema = schema.matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Passwords must contain at least 6 characters consisting of at ' +
        'least one uppercase, one lowercase, one number and one special' +
        ' case character'
    );
  }
  if (required) {
    schema = schema.required('A valid password is required');
  }

  return schema;
};

export const validatePasswordConfirm = (
  fieldName = 'password',
  required = true
) => {
  let schema = Yup.string().oneOf(
    [Yup.ref(fieldName), null],
    'Passwords must match'
  );

  if (required) {
    schema = schema.required('Please confirm your password!');
  }

  return schema;
};

export const validateUrl = (required = true) => {
  let schema = Yup.string().matches(
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
    'Please provide a valid website address'
  );

  if (required) {
    schema = schema.required('Please provide a valid website address');
  }

  return schema;
};

const Validators = {
  validateMoney,
  validateNumber,
  validateEmail,
  validatePassword,
  validatePhone,
  validateString,
  validateUpload,
  validateAutoComplete,
  validateSelect,
  validateLongNumber,
  validateCheckbox,
  validateAddress,
  validatePasswordConfirm,
  validateUrl
};
export default Validators;
