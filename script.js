"use strict";

// INITIAL DOM VARIABLES

const submitEl = document.getElementById("submit-btn");
const healthyEl = document.getElementById("healthy-btn");
const deleteEl = document.getElementById("delete-btn");

const idEl = document.getElementById("input-id");
const nameEl = document.getElementById("input-name");
const ageEl = document.getElementById("input-age");
const typeEl = document.getElementById("input-type");
const weightEl = document.getElementById("input-weight");
const lengthEl = document.getElementById("input-length");
const colorEl = document.getElementById("input-color-1");
const breedEl = document.getElementById("input-breed");
const vaccinatedEl = document.getElementById("input-vaccinated");
const dewormedEl = document.getElementById("input-dewormed");
const sterilizedEl = document.getElementById("input-sterilized");

const data = {
  id: idEl.value,
  age: Number(ageEl.value),
  namePet: nameEl.value,
  type: typeEl.value,
  weight: weightEl.value,
  length: lengthEl.value,
  color: colorEl.value,
  breed: breedEl.value,
};

// HANDLE SUBMIT BTN

submitEl.addEventListener("click", function () {
  // REQUIRE INPUT CONDITION
  console.log(data.age);
  // if (data.age > 14) {
  console.log("tuoi olon");
  // }
});
