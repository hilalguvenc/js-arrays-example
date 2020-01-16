// I added a array called officers.

var officers = [
  { id: 20, name: "James" },
  { id: 21, name: "Adam" },
  { id: 22, name: "Harry" },
  { id: 23, name: "Lina" }
];

// With forEach, id passed to the variable named officersId.
var officersId = [];

officers.forEach(function(officer) {
  officersId.push(officer.id);
});

//With map, id passed to the variable named officersId.
var officersId = officers.map(function(officer) {
  return officer.id;
});

//arrow function.
var officersId = officers.map(officer => officer.id);

//I added a array called pilots.

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];

//Total years of pilots calculated, initial value was 0.
var totalYears = pilots.reduce(function(accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);

// arrow function
var totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

//I finded which pilot is the most experienced one.
var mostExpPlt = pilots.reduce(function(oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

//.filter()

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];
//faction = "Rebel" filters ones.
var rebels = pilots.filter(function(pilot) {
  return pilot.faction === "Rebels";
});
//faction = "Empire" filters ones.
var empire = pilots.filter(function(pilot) {
  return pilot.faction === "Empire";
});

//arrow function
var rebels = pilots.filter(pilot => pilot.faction === "Rebels");

var empire = pilots.filter(pilot => pilot.faction === "Empire");

//combining .map() , .reduce(), .filter()

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

var OnlyForceUser = personnel.filter(
  PrivatePerson => PrivatePerson.isForceUser
);

var ScoresPrivatePerson = OnlyForceUser.map(
  person => person.pilotingScore + person.shootingScore
);

var TotalPrivatePerson = ScoresPrivatePerson.reduce(
  (acc, score) => acc + score,
  0
);

//We can chain all of this.

var TotalPrivatePerson = personnel
  .filter(function(person) {
    return person.isForceUser;
  })
  .map(function(jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function(acc, score) {
    return acc + score;
  }, 0);

//with arrow functions.

var TotalPrivatePerson = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
