# BMI Calculator as Function

- In the global scope, create two functions:
  1. **calculateBMI** takes two arguments:  `weight` number and a `height` number. It returns the BMI number so  
  BMI = weight / (height ** 2)
  2. **whoIsBiggest** takes four arguments: two `name` strings and two `bmi` numbers. It returns the name string of the bigger person  
  whoIsBiggest("Frank", "Mark", 26.72, 28.33) => "Mark"

**Bonus**
- Create ne function called  **whoIsBiggestBonus** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggestBonus** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggestBonus** function is called)


[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-functions-revisit-bmi-calculator/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-functions-revisit-bmi-calculator/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-functions-revisit-bmi-calculator/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run

[//]: # (autograding info end)