# Vision
Minimum Length: 3-5 sentences
**What is the vision of this product?:** To give movie recommendations for indecisive people

**What pain point does this project solve?:** Solved the issue of filtering through random movies to find the movie that is good.

**Why should we care about your product?:** Makes it easier to find entertainment

# Scope (In/Out)
**IN - What will your product do**
- Login to your account
- Pick your genre
- Generate movies in that specific genre
- Will allow you to generate a new movie if you don't like your first option
- Render your movie

**OUT - What will your product not do.**
- Will not display where you can view the movie
- Will not play the movie for you
- Will not save previously generated movies
- Will not requirement payments like Netflix

# Minimum Viable Product vs
**What will your MVP functionality be?:** You will login to your account, choose a genre, get a movie recommendation. You can also update your genre. If you delete a genre, the movie generator will recommend any random movie.

**What are your stretch goals?:**
- Add multiple genres
- Add music api for music options
- Add books api for book options

# Stretch
**What stretch goals are you going to aim for?:**
- Add multiple genres

# Functional Requirements
List the functionality of your product. This will consist of tasks such as the following:

- User will login
- Login to your account
- Pick your genre
- Generate movies in that specific genre
- Will allow you to generate a new movie if you don't like your first option
- Render your movie

# Data Flow
1. User logs in
1. User picks a genre
1. User clicks "Genrerator button"
1. Website displays movie in that genre
1. User can resubmit to get a new recommendation by clicking the "Genrerator button" again
1. User can update genre
1. User can delete genre for completely random movie recommendation

# Non-Functional Requirements (301 & 401 only)
Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

1. Secure user authentication: We have a secure log in and log out process. We want to ensure we use a service like Auth0 so that it's a safe authentication experience. The user feels confident that their information is secure based on the technology that they're using to log in.
1. Reuseability: Offer the user the chance to keep coming back to our site by giving them a random movie each day based on their genre(s) that they pick. You could also reuse this app to edit it by adding books or music. It can become a book-generator or a song-generator.