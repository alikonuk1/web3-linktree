// Leave unwanted fields equal to undefined.
// Web3 Link Tree will handle the rest (🔗, 🌲)

// Set 'wallet' to undefined if you wish to disable the Tipping feature
export const DETAILS = {
  name: 'Ali',
  header: 'Ali.devdao',
  headerlink: 'https://twitter.com/cryptobeyb',
  wallet: '0x2B68407d77B044237aE7f99369AA0347Ca44B129'
}

// Import Background Image here 👇
import bg from './images/bg.gif'
export const BG = bg;

// Import Logo Image here 👇
import logo from './images/logo.png'
export const LOGO = logo;

import btn_twitter from './images/btn_twitter.png'
import btn_medium from './images/btn_medium.png'
import btn_github from './images/btn_github.png'
import btn_discord from './images/btn_discord.png'
// Import Button Images here 👆

// Buttons are best as 1500x500px images!
// Upload your image to twitter as a header,
// then save your image and drag it in the /images/ folder.

// To include a footer icon: Give 'link' a value
// To include a button: Give 'button' your imported image value
export const TWITTER = {
  link: 'https://twitter.com/cryptobeyb',
  button: btn_twitter
}

export const MEDIUM = {
  link: undefined,
  button: undefined
}

export const GITHUB = {
  link: 'https://github.com/alikonuk1',
  button: btn_github
}

export const DISCORD = {
  link: 'alikonuk#2678',
  button: btn_discord
}

export const SUBSTACK = {
  link: undefined,
  button: undefined
}

export const ABOUT = {
  title: 'DAOs',
  text: 'D_D'
}
export const ABOUT2 = {
  title: undefined,
  text: undefined
}
export const ABOUT3 = {
  title: undefined,
  text: undefined
}
export const ABOUT4 = {
  title: undefined,
  text: undefined
}
export const ABOUT5 = {
  title: undefined,
  text: undefined
}

export const TITLE = `${DETAILS.name}'s Web3 Link Tree`