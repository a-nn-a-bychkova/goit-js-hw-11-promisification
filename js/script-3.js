// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess
// і onError, а приймала всього один параметр transaction і повертала проміс.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
   const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
   const canProcess = Math.random() > 0.3;

    setTimeout(() => {
    if (canProcess) {
      resolve(`Transaction ${transaction.id} processed in ${delay}ms`);
  }
      reject(`Error processing transaction ${transaction.id}. Please try again later.`);
  }, delay);
  })
};

function logSuccess(result) {
  console.log('logSuccess');
  console.log(result);
};
function logError(error) {
  console.log('logError');
  console.log(error);
};

/*
 * Працює так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Повинно працювати так
 */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);