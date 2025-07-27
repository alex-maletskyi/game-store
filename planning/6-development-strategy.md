# Game Store Development Strategy

Here you can find the development strategy for the website.

## Setup

- Create a [repository](https://github.com/alex-maletskyi/game-store)
- Create a [project board](https://github.com/users/alex-maletskyi/projects/1)
- Clone repo

## Must-Haves 

### 1. Search Bar

> "As a gamer I want to filter games by platform, price, and genre"

- [ ] Create dropdown lists for filters to the right of the search bar
- [ ] Checkbox for filter of platforms: **Xbox, PlayStation, and PC**

### 2. Nav Bar

> "As a user of the website,  I can **sign up and log in to a personal account.**"
- [ ] Create a button at the right corner of the Nav Bar, clicking which would open a window to log in/sign up 

### 3. Game List Page

> "As a user of the website, I want the **games to be displayed in card view by default.**"

- [ ] The games are displayed in card style 
- [ ] Each game card should have a "Buy Now" button
- [ ] Each game card should have a "Add to Basket" button
- [ ] Each game card should have a "Add to Wishlist" button
- [ ] Each game card should have a platform icon (Xbox or PC game)

> "Want the games to have a **color coded sale type**"

Each game has a label with a specific color:
- [ ] RED label - SALE (with percentage off inside the label)
- [ ] GREEN label - NEW (with word 'NEW' inside the label)
- [ ] ORANGE label - DISCOUNT (with percentage off inside the label)


> "When switching devices, the **website is responsive on both mobile and desktop.**"
- [ ] The aspect ratios change automatucally when switching size of screens

### 4. Wishlist Page

> "While logged in, I can **add/remove games to/from a wishlist.**" 
> 
- [ ] On this page, users can remove games or add to cart 

### 5. Purchase Page

> "After placing games in a shopping cart, I want to **see the total price.**"

- [ ] At the **right upper corner** there is a **total amount** for all the games in a shopping cart

### 6. Game Page

> "As a game enthusiast, after clicking on a game there's a **game's description along with its screenshots.**"

- [ ] Each game has its own page where there is a description, screenshots, and videos about the game

## Should haves 

> "After clicking on a button, I want to **toggle between card and list views when seeing the games.**"
> 
- [ ] This feature can be **toggled on/off** using a button that changes from card to a list view
  
> "As a gamer, I should **see the sales categories (new release, discount, deal) shown on the homepage as highlights.**"

> "As a game critic, I should be able to leave a **rating/review for games.**"

> As a logged-in user, I can **view the purchase history.**

> Optional **dark mode** for better UX.


## Could haves 
> As a buyer, I should be given a prompt/window to pay with several options after clicking to buy a game. 

- [ ] After buying a game, the user is **prompted to choose how to pay.**
- As a user of the website, I should be able to change the currency that the games are sold in.
- [ ] After clicking on the currency button and choosing from the list, the **currency of the prices for the games should change**
