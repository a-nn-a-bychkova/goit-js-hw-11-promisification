// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, 
// а приймала всього два параметри allUsers і userName і повертала проміс.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
return new Promise((resolve, reject) =>
 { setTimeout(() => {
        resolve(updatedUsers)
        reject('Промис выполнился с ошибкой')
  }, 0);
})

};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);