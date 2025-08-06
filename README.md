### Architecture:

I'm not a big fan of overengineering simple things since I've seen at my current project the consequences of making
simple things more advanced than it's necessary.

Frankly speaking I was thinking about using any architecture here besides standalone components
since this application was very small and didn't really need any fancy architecture such as onion for example,
however I understand that you need to check whether I know anything about building applications from scratch
so I decided to use containers/presenters architecture which works perfectly fine for small/medium apps, especially
with newer versions of Angular with fully standalone components. It was a propper choice for this application
since my app contains list of cards and second screen with more information about specific drink of user's choice.

### Linters:

It's always a good choice to install linters if the app is going to be used by more than 1 developer (but honestly
I'd use it for one as well just for the sake of visibility) at the beginning when the project i fresh it's very
easy to apply the config and make use of it from the beginning - it helps later on with standardization of code base
and saves extra time on code reviews for both reviewer and owner of the pull request. If I'd have more time for this
task I'd definitely think of adding stylelint and ESLint (must have!), packing it all up with Husky allows to keep
repository fresh and clean = )

### API

It was quite challenging to work with given API because it has broken a lot of good practices and standards as for
public APIs such as prefixes with types, unclear naming for example strDrinkThumb suggest a thumbnail but in reality
it's the entire URL address.

Pairing ingredients with measures was a nightmare and needed an API facade on the front-end which could hurt performance
in bigger queries I'd suggest to change API's ingredients and measures to:

"ingredients": [
  { "name": "Vodka", "amount": "1", "unit": "shot""}
]

Instead of playing with Ingredient1... Measure1... :(


### WLA

I've added simple WLA config which could be extended as business needs would increase because I've wrapped it up
with a handy service that handles the file locally (it's being processed as observable so it's not a big issue
to hold this file on the server later on) the service could be injected to any given component and change behaviour
of the app, for example could change company's name, accessibility (I wasn't able to cover so many things in just
3-4h given to this task) multiple languages support (on the toolbar dropdown), default language, logo url etc.

I've used new angular's pattern to add this config by using 'provideAppInitializer' with arrow function that's utilizing
my service to catch the config with 'firstValueFrom' (like I've mentioned it's ready to fetch config from backend if
needed)

### UI Library

Not much to talk about, I've just used PrimeNG because it seemed to look good out of the box and since the task was
time limited I didn't want to worry much about styling it on my own, instead I've just used ready components. 
I was also considering using Angular Material. Commercially I work with internal libraries which are quite similar
to each other so using anything new isn't a dealbreaker for me

### Aliases

TypeScript provides very handy way to make import looks good, I know it wasn't probably part of the task but
I've created aliases for shared, features, services directories' path at tsconfig.json - it just looks better
and it's more clear for new joiners to the team if the project gets bigger later on = )

### What I'd do if I'd have more time?

I'd definitely add unit tests, as you can see there are files for them but I lacked time to do so, unit tests
are really important especially when working with public APIs where things might change over time, in this
scenario unit tests could give you a clean look of what went wrong. (Could be added to Husky)

Adding service for notifications to use them whenever any error shows up (cover the error handling blocks of code
at services - catch)

Adding service to handle language changes.

Use any commiting convention, for now it was quite raw on main branch.
