import { useReducer, useState } from 'react';

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email) {
  if (!email) return 'Por favor ingresa una direccion de correo';
  if (!emailPattern.test(email)) return 'La direccion de correo es invalida';

  return null;
}

function useField(emailSubmit) {
  const [fieldValue, setFieldValue] = useState('');
  const [fieldState, setFieldState] = useState('blank');
  const [fieldError, setFieldError] = useState(false);

  const error = validateEmail(fieldValue);

  const isValid = () => {
    if (fieldState === 'blank') return true;

    if (error !== null) {
      setFieldState('error');
      setFieldError(true);
      return false;
    }
  };

  return {
    getEmail: () => fieldValue,
    getEmailError: () => error,
    isValid,
    updateEmail: (e) => {
      if (fieldState === 'blank') setFieldState('iniital');
      setFieldValue(e.target.value);
    },
  };
}

export default useField;
