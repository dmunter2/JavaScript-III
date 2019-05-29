/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object binding: When we are in the global scope the value of this will be the window or console object
 * 2. Implicit Binding: is when dot notation is used to invoke a function, called by a preceding dot
 * 3. New Binding: Whenever a constructor function is used and you create a new copy
 * 4. Explicity Binding: Whenever we use the call or apply method
 *
 * write out a code example of each explanation above
 */

// Principle 1
function goodbye(name) {
    // console.log(this);
    return `${name}, goodbye`
};

console.log(goodbye('Devon'));

// code example for Window Binding



// Principle 2
const myObj = {
    greeting: 'Goodmorning',
    introduction: function(name) {
        console.log(`${this.greeting} how are you today ${name}`);
    }
};

myObj.introduction('Dev');


// code example for Implicit Binding




// Principle 3

function bestTeam(teamName) {
    this.announcement = 'One of the best baseball teams are';
    this.teamName = teamName;
    this.sentence = function() {
        console.log(`${this.announcement} the ${this.teamName}`);
    };
}

const nyYankees = new bestTeam('New York Yankees');
const chWhitesox = new bestTeam('Chicago White Sox');
const kcRoyals = new bestTeam('Kansas City Royals');

// nyYankees.sentence();
// chWhitesox.sentence();
// kcRoyals.sentence();




// code example for New Binding

// Principle 4

nyYankees.sentence.call(chWhitesox);
chWhitesox.sentence.apply(kcRoyals);
kcRoyals.sentence.call(nyYankees);


// code example for Explicit Binding