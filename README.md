# A highly-customized fork of kartikk221/spotify-true-shuffle

## Why?
I didn't really enjoy the color scheme of the original page. At the time of creation, there was a change with the Spotify API which rendered the original unusuable. The original maintainer of the repository had not fixed it so I decided to take it upon myself to fix it. Turned out, all that changed was a status code, from 204 -> 200.

## What's changed?
I added color schemes and removed some Spotify branding (Spotify is *really* picky on how you use their logos, etc.) so hopefully I have a better chance of obtaining an API extension. I also added a button to log out of the service, and a few other tweaks I thought looked nice.

# -- Original README below: --

# TrueShuffle: An open-source music shuffling web application & player for Spotify
![alt text](/assets/images/meta-image.png)

## Motivation
After having Spotify play the same 40-50 songs repetitively from my playlist that's well over 1000 songs in total, I was done with their shuffle algorithm. TrueShuffle is a completely front-end based web application that interacts with the Spotify API to bring truly unbiased music shuffling to Spotify. TrueShuffle will shuffle all of your music based on randomness and ensure there is sufficient sparseness so you finally get to hear songs from all over your playlist. This application was built over the span of a few hours, so feel free to fork and improve on the UI/Features.

## How to use?
- Go to ~~https://spotify-true-shuffle.pages.dev/~~ https://shuffle.catgirl.expert
- Connect your Spotify Account
- Choose your desired playlist & device
- Begin Shuffling!

## License
[MIT](./LICENSE)
