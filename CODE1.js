/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 1 || created: 09.23.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, numberOfbedrooms, numberOfbathrooms, totalPrice, numberOfcarsGarageholds;
const BASE_PRICE = 50000;
const BEDROOM_COST = 17000;
const BATHROOM_COST = 12500;
const NUMBER_OF_CARS_GARAGE_HOLDS = 6000;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setLotnumber ();
    setBedroomcost();
    setBathroomcost();
    setNumberofCarsgarageHolds();
    setTotalprice();
    printTotalprice();
}

main();

/**
 * @method
 * @desc Set the number of bedrooms
 * @returns {null}
 */
function setLotnumber() {
    lotNumber = Number(PROMPT.question(`\nPlease enter lot number: `));
}

/**
 * @method
 * @desc Set the number of bedrooms
 * @returns {null}
 */
function setBedroomcost() {
    numberOfbedrooms = Number(PROMPT.question(`\nPlease enter number of bedrooms: `));
}

/**
 * @method
 * @desc Set the number of bathrooms
 * @returns {null}
 */
function setBathroomcost() {
    numberOfbathrooms = Number(PROMPT.question(`\nPlease enter number of bathrooms: `));
}

/**
 * @method
 * @desc Set the number of cars garage holds();
 * @returns {null}
 */
function setNumberofCarsgarageHolds() {
    numberOfcarsGarageholds = Number(PROMPT.question(`\nPlease enter number of cars garage holds: `));
}

/**
 * @method
 * @desc Set the total
 * @returns {null}
 */
function setTotalprice() {
   totalPrice = BASE_PRICE + (numberOfbedrooms * BEDROOM_COST) + (numberOfbathrooms * BATHROOM_COST) + (numberOfcarsGarageholds * NUMBER_OF_CARS_GARAGE_HOLDS);

}

/**
 * @method
 * @desc Output the final commission from the sale
 * @returns {null}
 */
function printTotalprice() {
    console.log(`\n Lot Number: ${lotNumber} Total Price: \$${totalPrice}`);
}

/*
Design the logic for a program for the River Falls Homes Construction Company. 
Design a program that prompts the user for a lot number in the River Falls subdivision, 
and data about the home to be built there including number of bedrooms, number of bathrooms, 
and size of garage in number of cars it holds. Output is the price of the home which is
$50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom, and $6,000 
for each car the garage holds. (Only needs to run once).
 */