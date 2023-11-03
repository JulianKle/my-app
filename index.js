function generateEmail(user) {
  const newEmail = `${user.firstName}.${user.lastName}@gmail.com`;
  return newEmail;
}

const name1 = {
  firstName: Julian,
  lastName: Klett,
};

function getUserFromEmail(email) {
  if (!email.includes("@")) {
    console.log("Not an email adress");
    return null;
  } else if (email.includes("@")) {
    const split1 = email.split("@");
    const firstEntry = split1[0];
    if (!firstEntry.includes(".")) {
      console.log("nodots@example.com");
      return null;
    } else {
      const split2 = firstEntry.split(".");

      const userName = {
        firstName: split2[0],
        lastName: split2[1],
      };
      console.log(firstName, lastName);
    }
  }
}

console.log(generateEmail(name1));
console.log(getUserFromEmail(newEmail));

/* function generateEmail(user) {
  const firstNameLowerCase = user.firstName.toLowerCase();
  const lastNameLowerCase = user.lastName.toLowerCase();

  return `${firstNameLowerCase}.${lastNameLowerCase}@example.com`;
}

function getUserFromEmail(email) {
  if (!email.includes("@")) {
    return null;
  }

  const splitEmail = email.split("@");

  if (!splitEmail[0].includes(".")) {
    return null;
  }

  const userData = splitEmail[0].split(".");

  const newUser = {
    firstName: capitalizeName(userData[0]),
    lastName: capitalizeName(userData[1]),
  };

  return newUser;
}

function capitalizeName(name) {
  const firstLetterToUppercase = name[0].toUpperCase();
  return `${firstLetterToUppercase}` + name.slice(1);
}

const generateEmailForm = document.querySelector(
  '[data-js="generate-email-form"]'
);
const generateUserForm = document.querySelector(
  '[data-js="generate-user-form"]'
);

// 3. task: bring it online

const emailOutput = document.querySelector('[data-js="generate-email-output"]');
const userOutput = document.querySelector('[data-js="generate-user-output"]');

generateEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  emailOutput.textContent = generateEmail(data);
});

generateUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = getUserFromEmail(event.target.elements.email.value);

  if (!user) {
    userOutput.textContent = "User could not be guessed.";
    return;
  }

  userOutput.textContent = `${user.firstName} ${user.lastName}`;
});
*/
