import restaurantFields from './restaurantFields';

export default values => {
  const errors = {};
  _.each(restaurantFields, ({ name, req, min_length, max_length }) => {
    if (!values[name] && req) {
      errors[name] = `Please enter the ${name}`;
    } else if (
      values[name] &&
      (values[name].length < min_length || values[name].length > max_length)
    ) {
      errors[name] = `${name} should between ${min_length} and ${max_length} `;
    }
  });
  return errors;
};
