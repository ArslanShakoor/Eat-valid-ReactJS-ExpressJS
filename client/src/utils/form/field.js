import React from 'react';
import ReactStars from 'react-stars';
import SelectField from './SelectField';
export default ({
  input,
  label,
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
        <select {...input} name={name} disabled={disable}>
          <option value="" disabled>
            Select
          </option>
          <SelectField />
        </select>
        <div className="error">{touched && error}</div>
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
        <div className="error">{touched && error}</div>
      </div>
    );
  } else if (type === 'stars') {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <label>
          {label}
          <span className={req ? 'req' : 'none'} />
        </label>
        <ReactStars edit={disable} {...input} count={5} size={20} />
        <div className="error">{touched && error}</div>
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
        <div className="error">{touched && error}</div>
      </div>
    );
  }
};
