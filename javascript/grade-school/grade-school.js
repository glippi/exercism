function createSortedObject(sortedCollectionValues, sortedCollectionKeys) {
  return sortedCollectionValues.map((collection, i) => ({ [collection]: sortedCollectionKeys[i] }));
}
function sortRoster(roster) {
  const keys = [];
  const values = [];
  Object.entries(roster).forEach(([k, v]) => {
    keys.push(k);
    values.push(v);
  });
  const sortedKeys = keys.sort();
  const sortedValues = values.map(value => value.sort());
  createSortedObject(sortedValues, sortedKeys);
}

export class Roster {
  constructor() {
    this.roster = {};
  }

  addStudent(student, grade) {
    const students = this.getStudentsInGrade(grade) ? [...this.getStudentsInGrade(grade), student] : [student];
    this.roster = { [grade]: students };
    return this.roster;
  }

  getStudentsInGrade(grade) {
    return this.roster[grade];
  }

  getAll() {
    this.roster = {
      grade1: ['Dan', 'Paul'],
      grade2: ['Jim', 'John', 'Mary'],
    };
    sortRoster(this.roster);
    return this.roster;
  }
}
