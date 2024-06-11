// Copyright (c) HAMES AL SHAROA All rights reserved
//
// Created by: hames al sharoa
// Created on: may 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  })
}

/**
 * This function counts up from 1 to the user's chosen value.
 */
function myButtonClicked() {
  const num = parseInt(document.getElementById("integer").value)
  let sum = 0

  document.getElementById("formula").innerHTML =
    "Sn = " + num + "/2(" + num + "+1)"

  for (let counter = 1; counter < num + 1; counter++) {
    sum += counter
  }

  document.getElementById("sum").innerHTML = "Answer = " + sum
}