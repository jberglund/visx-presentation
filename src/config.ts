const config = {
  width: 500,
  height: 200,
  padding: { top: 10, right: 10, bottom: 10, left: 10 },
  radius: 5,
};

export const { width, height, padding, radius } = config;

export type Employee = {
  name: string;
  date: Date;
};

export const employees: Employee[] = [
  { name: 'Anders Morten Ramstad Hammervold', date: new Date('2018-08-01') },
  { name: 'Mikael Brevik', date: new Date('2018-09-01') },
  { name: 'Marius Krakeli', date: new Date('2018-09-01') },
  { name: 'Odd Morten Sveås', date: new Date('2018-09-01') },
  { name: 'Tonje Evanger', date: new Date('2018-09-01') },
  { name: 'Tore Vestues', date: new Date('2018-09-01') },
  { name: 'Jacob Berglund', date: new Date('2019-01-01') },
  { name: 'Petter Suul', date: new Date('2019-01-01') },
  { name: 'Line Skjærvik', date: new Date('2019-02-01') },
  { name: 'Ellen Wagnild-Antonsen', date: new Date('2019-01-30') },
  { name: 'Hilde Osmo Reindal', date: new Date('2019-05-01') },
  { name: 'Christian Brevik', date: new Date('2019-03-01') },
  { name: 'Kristin Qvenild Nesset', date: new Date('2019-04-24') },
  { name: 'Magnus Olderø Sæther', date: new Date('2019-05-13') },
  { name: 'Maciek Jakub Adamczyk', date: new Date('2019-08-01') },
  { name: 'Adrian Santana Berg', date: new Date('2019-09-01') },
  { name: 'Vikas Gupta', date: new Date('2019-09-26') },
  { name: 'Sarah Serussi', date: new Date('2019-09-01') },
  { name: 'Ole Jørgen Skogstad', date: new Date('2019-12-01') },
  { name: 'Malin C. Karlsen', date: new Date('2020-02-01') },
  { name: 'Mathias Flått', date: new Date('2020-08-01') },
  { name: 'Magnus Dahl', date: new Date('2020-08-01') },
  { name: 'Mikkel Dan-Rognlie', date: new Date('2020-09-01') },
  { name: 'Stine Bechmann', date: new Date('2020-09-01') },
  { name: 'Anders Njøs Slinde', date: new Date('2020-08-01') },
  { name: 'Bror Brurberg', date: new Date('2020-10-01') },
  { name: 'Linn Helen Dyrhaug', date: new Date('2020-10-01') },
  { name: 'Simen Strøm Braaten', date: new Date('2020-10-02') },
  { name: 'Mari Andrine Thorsteinsen', date: new Date('2021-03-01') },
  { name: 'Tore Stensaker Tefre', date: new Date('2021-08-01') },
  { name: 'Martin Bolin Møller', date: new Date('2021-08-01') },
  { name: 'Stina Sofie Møller', date: new Date('2021-08-01') },
  { name: 'Tormod Haugene', date: new Date('2021-08-01') },
];
