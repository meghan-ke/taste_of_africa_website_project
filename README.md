# Tastes of Africa

A website about African food. It has recipes, a page for each region of the continent, a few short stories, and a contact form. It is built with plain HTML, CSS and JavaScript, so there is nothing to install.

## How to run it

Open the project folder in VS Code and install the Live Server extension. Then right-click `index.html` and choose Open with Live Server. Please don't double-click the files, because some videos won't play that way.

## What's in the site

- Home: a welcome video, four signature dishes, links to each region, and food stories.
- Recipes: every dish in one place. You can filter by region and tap the heart to save your favorites.
- Regions: what people cook in West, North, East and Southern Africa.
- About: why we made the site, a short history of African food, and a map.
- Contact: a message form.
- Recipe pages: one for each dish, with ingredients, steps, a video and a map.

## The dishes

- West Africa: Smoky Jollof Rice
- North Africa: Preserved Lemon Tagine
- East Africa: Doro Wat
- Southern Africa: Durban Bunny Chow

## Where things are

The pages sit in the main folder: `index.html`, `recipes.html`, `regions.html`, `stories.html`, `about.html` and `contact.html`. The recipe pages are in the `recipe` folder. All the styling is in `css/styles.css`, everything that moves or reacts is in `js/script.js`, and the photos are in the `images` folder.

## Changing things

The colors, fonts and spacing are at the top of `css/styles.css`. Change a value there and it changes across the whole site.

The menu and footer are copied on every page, so if you change one, change them all.

For photos, put them in `images/dishes` and make sure the file name matches the one in the HTML exactly, including capital letters. For videos, swap the ID after `/embed/` in the video link.

## What the JavaScript does

It opens and closes the menu on phones, filters the recipes when you click a region, and remembers your favorite recipes even after a refresh. It also checks the contact form, where the message must be longer than 20 characters, and then says thank you with your name. And it plays the hero video quietly in the background.

## Good to know

The nutrition numbers on the recipe pages are rough estimates, and the food stories are sample text. The Country box on the contact form is a dropdown, and the suggestions list is on the optional "Favorite dish" field, because HTML can't attach suggestions to a dropdown.

