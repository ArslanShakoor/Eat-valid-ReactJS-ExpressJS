import formFields from './formFields';

const numOfItem = formFields.length;
test('number of items = 7', () => {
  expect(numOfItem).toBe(7);
});
