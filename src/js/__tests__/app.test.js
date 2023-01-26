import Character from '../app';

test('тест класса родителя Character', () => {
  const input = new Character('Halk', 'Bowman');
  const expected = {
    name: 'Halk', type: 'Bowman', health: 100, level: 1,
  };

  expect(input).toEqual(expected);
});


test('number of characters in the name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('Halkfastasthewind', 'Bowman');
  }).toThrowError('имя должно содержать от 2 до 10 сиволов');
});
