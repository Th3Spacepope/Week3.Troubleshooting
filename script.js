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
    // Logic to play the song
  }

  // Method to display song information
  displayInfo() {
    console.log(
      `Title: ${this.title}\n
            Artist: ${this.artist}\n
            Duration: ${this.duration} minutes\n
            Release Year: ${this.releaseYear}\n
            Rating: ${this.rating}/5`
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

//all of the below lines of code should run correctly once the above errors are fixed.
const myAwesomeSong = new BigHit("Hoo Hoo", "Stella", 45, 2025);
myAwesomeSong.play();
myAwesomeSong.displayInfo();
myAwesomeSong.rate(5);
