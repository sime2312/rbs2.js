const users = [
    { id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false },
    { id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true },
    { id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false },
    { id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true },
    { id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false },
    { id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true },
    { id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false },
    { id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false }
];

    const userjose = users.find(user => user.firstName === 'Jose');
    console.log(userjose);
    const premiummember = users.filter(user => user.isPremiumMember === true);
    console.log(premiummember);
    const userLastName = users.map(users => users.lastName);
      console.log(userLastName);
      const Nameslogins = users.map(user => user.name + user .logins > 10);
      console.log(Nameslogins);
      const y = users.filter(user => user.logins > 10).map(user => user.firstName + " " + user.lastName);
console.log(y);
const totallogin = users.reduce((total,item) => {
    return total + item.logins
}, 0)
console.log(totallogin);
