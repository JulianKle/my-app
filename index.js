const user = {
  firstName: "Julian",
  lastName: "Klett",
};

function generateEmail(user) {
  const email = `${user.firstName}.${user.lastName}@gmail.com`;
  return email;
}

const generatedEmail = generateEmail(user);

console.log(generatedEmail);

console.log("Hi");
