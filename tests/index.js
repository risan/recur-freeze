import recurFreeze from '../src';

test('it can freeze object', () => {
  const person = {
    name: 'john',
    middleName: null,
    age: 20,
    address: {
      city: 'Cimahi',
      country: 'Indonesia 🇮🇩'
    },
    languages: ['English', 'Indonesia']
  };

  recurFreeze(person);

  // Change property value
  expect(() => (person.name = 'doe')).toThrow(TypeError);
  expect(() => (person.middleName = 'doe')).toThrow(TypeError);
  expect(() => (person.age = 10)).toThrow(TypeError);
  expect(() => (person.address = { foo: 'bar' })).toThrow(TypeError);
  expect(() => (person.address.country = 'Sweden 🇸🇪')).toThrow(TypeError);
  expect(() => (person.languages[0] = 'Svenska')).toThrow(TypeError);

  // Add new property
  expect(() => (person.foo = 'bar')).toThrow(TypeError);
  expect(() => (person.address.zip = 12345)).toThrow(TypeError);
  expect(() => person.languages.push('PHP')).toThrow(TypeError);

  // Delete property
  expect(() => delete person.name).toThrow(TypeError);
  expect(() => delete person.address).toThrow(TypeError);
  expect(() => delete person.address.city).toThrow(TypeError);
  expect(() => delete person.languages[0]).toThrow(TypeError);
});
