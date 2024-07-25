const checkBox = document.querySelectorAll(".checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorlabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let completedGoalsCount = Object.values(allGoals).filter((goal) => {
  return goal.completed;
}).length;
progressValue.style.width=`${completedGoalsCount/3*100}%`
progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`
checkBox.forEach((datacheckBox) => {
  datacheckBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every(function (input) {
      return input.value;
    });
    if (allGoalsAdded) {
      datacheckBox.parentElement.classList.toggle("completed");
      
      const nextSibling = datacheckBox.nextElementSibling.id;
      // console.log(nextSibling)
      allGoals[nextSibling].completed = !allGoals[nextSibling].completed;
      completedGoalsCount=Object.values(allGoals).filter((goal) => {
        return goal.completed;
      }).length;
      progressValue.style.width=`${completedGoalsCount/3*100}%`
      progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`

      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
