import { Roster } from './grade-school';

test('Create a roster', () => {
  const roster = new Roster();

  expect(roster).toBeInstanceOf(Roster);
});

test('Add a student to a roster for grade 2', () => {
  const roster = new Roster();

  expect(roster.addStudent('Jim', 'grade2')).toMatchObject({ grade2: ['Jim'] });
});

test('Add another student to a roster for grade 2', () => {
  const roster = new Roster();
  roster.addStudent('Jim', 'grade2');

  expect(roster.addStudent('John', 'grade2')).toMatchObject({ grade2: ['Jim', 'John'] });
});

test('Get a list of all students enrolled in a grade', () => {
  const roster = new Roster();
  roster.addStudent('Jim', 'grade2');

  expect(roster.getStudentsInGrade('grade2')).toContain('Jim');
});

test('Get a sorted list of all students in all grades', () => {
  const roster = new Roster();
  roster.addStudent('Jim', 'grade2');
  roster.addStudent('John', 'grade2');
  roster.addStudent('Mary', 'grade2');
  roster.addStudent('Dan', 'grade1');
  roster.addStudent('Paul', 'grade1');
  expect(roster.getAll()).toMatchObject({
    grade1: ['Dan', 'Paul'],
    grade2: ['Jim', 'John', 'Mary'],
  });
});
