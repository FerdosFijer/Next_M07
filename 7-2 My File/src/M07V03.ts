//! Type guard (type narrowing) using typeof and in : Type k guard dewar maddome janbo eta kon type er data and if type match then kaj ta korbo

// in typeof

type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString(); //.toString means concatenation hosse
  }
};

// Eikhan e protome 2 ta type silo num and string then sudu akta type hoye gleo string or number it's means type narrow hoye jasse

add(2, 2); // 4

add(2, "2"); // 22

add("2", 2); // 22

add("2", "2"); //

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role is : ${user.role}`);
  } else {
    console.log(` ${user.name}`);
  }
};
getUserInfo({ name: "Normal", role: "Admin" });
getUserInfo({ name: "Nor",  });
