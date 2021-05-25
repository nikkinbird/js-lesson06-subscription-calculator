var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;

  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  var total = subDuration * monthlyCost;

  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

subTypeElement.addEventListener("click", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("click", function (f) {
  subDuration = Number(f.target.value);
  updateSubscriptionDiv();
});
