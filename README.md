# Troubleshooting 3 | MUST 4707

## Finding Errors in Existing Code and Fixing Them
In this assignment, you will update the file `script.js` and commit it to your assignment repository. Your updated version of `script.js` should run without any errors. The object `myWinterCoat` should have all of the proper syntax required of an object. If it does, it will export properly and your code will pass all of the tests.

### Troubleshooting
Troubleshooting is the process of identifying, diagnosing, and resolving issues or problems in a system, device, software, or any complex situation. It involves systematically analyzing the symptoms, investigating potential causes, and implementing solutions to restore normal functionality or achieve the desired outcome. Troubleshooting is a critical skill used in various fields, including technology, engineering, and everyday problem-solving, to address and fix problems efficiently.

### Accessing the Assignment Materials
1. Navigate to the assignment repository in the course [GitHub organization](https://github.com/MUST4707)
2. Click on the green `Use this template` button in the top right corner.
3. Choose 'Create a new repository'
4. Set up the repo name under your account.
5. Click `Create repository`

*You should now be at your own personal repository with the assignment materials.*
6. Click on the green `<> Code` button and select `Open with GitHub Desktop`

*You should now be in your GitHub Desktop application that has a pop-up window called 'Clone a Repository'*
7. Make sure the local path is where you would like to save this repo.
8. Hit `Clone`
9. You should now click the `Open in Visual Studio Code` button or navigate to your files and open the folder in Visual Studio Code.
10. After you finish working on your project, please return to GitHub Desktop and:
   1. Commit your changes to the `master` (don’t forget to add a summary description).
   2. Click on the `Push Origin` to sync your commit with the GitHub cloud.

### Task Description
1. The provided `script.js` contains an object called `myWinterCoat`, but there are some coding errors.
2. Figure out what is wrong with the code and fix it!
3. After fixing the errors in the code, make sure it meets the requirements listed below and passes the provided tests.

### Coding Instructions
You will edit your code in `script.js`:
```js
class BigHit {
    constructor(name, artist, duration, releaseYear) {
        this.title = name;
        this.artist = artist;
        this.duration = duration; // in minutes
        this.releaseYear = releaseYear;
        this.rating = 0; // default rating
    }

    // Method to play the song
    play() {
        console.log(`Playing '${this.title}' by ${this.artist}`);
    }

    // Method to display song information
    displayInfo() {
        console.log(
            `Title: ${this.title}\n` +
            `Artist: ${this.artist}\n` +
            `Duration: ${this.duration} minutes\n` +
            `Release Year: ${this.releaseYear}\n` +
            `Rating: ${this.rating}/5`
        );
    }

    // Method to rate the song
    rate(rating) {
        if (rating >= 0 && rating <= 5) {
            this.rating = rating;
            console.log(`Rating for '${this.title}' updated to ${this.rating}/5`);
        } else {
            console.log("Invalid rating. Please rate between 0 and 5.");
        }
    }
}

// All of the below lines of code should run correctly once the above errors are fixed.
const myAwesomeSong = new BigHit("Hoo Hoo", "Stella", 45, 2025);
myAwesomeSong.play();
myAwesomeSong.displayInfo();
myAwesomeSong.rate(5);
```

### Testing Your Work (Using VS Code and Your Browser)
1. Make sure you have saved all of your files, then click on the `index.html` file.
2. Click on "Go Live".
3. Once the browser window opens with the assignment webpage, open the JavaScript Console.
4. You should see the following in the console. If you do not, the code is not running correctly:
   - `Playing 'Hoo Hoo' by Stella`
   - `Title: Hoo Hoo`
     `Artist: Stella`
     `Duration: 45 minutes`
     `Release Year: 2025`
     `Rating: 0/5`
   - `Rating for 'Hoo Hoo' updated to 5/5`

*If any of the above returns an error or an unexpected result, please return to your code and update it to fix the error. Repeat this process until there are no errors.*

### Submission Steps
1. Upload your `script.js` to the Canvas assignment.
