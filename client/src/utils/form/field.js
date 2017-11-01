import React from 'react';
import ReactStars from 'react-stars';
import SelectField from './SelectField';
export default ({
  input,
  label,
  values,
  type,
  req,
  disable,
  meta: { error, touched }
}) => {
  if (type === 'select') {
    return (
      <div>
        <label>
          {label}
          <span className={req ? 'req' : ''} />
        </label>
        <select {...input} disabled={disable}>
          <SelectField />
        </select>
        {touched && error}
      </div>
    );
  } else if (type === 'textarea') {
    return (
      <div>
        <label>
          {label}
          <span className={req ? 'req' : 'none'} />
        </label>
        <textarea {...input} rows="3" disabled={disable} />
        {touched && error}
      </div>
    );
  } else if (type === 'stars') {
    return (
      <div className="col-sm-3">
        <label>
          {label}
          <span className={req ? 'req' : 'none'} />
        </label>
        <ReactStars edit={disable} {...input} count={5} size={20} />
        {touched && error}
      </div>
    );
  } else if (type === 'text' || 'checkbox') {
    return (
      <div>
        <label>
          {label}
          <span className={req ? 'req' : 'none'} />
        </label>
        <input {...input} type={type} disabled={disable} />
        {touched && error}
      </div>
    );
  }
};
