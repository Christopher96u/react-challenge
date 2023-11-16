# Frontend Developer Challenge

This project is part of a technical challenge for Superloop.

## Tech Stack

- Typescript
- Tailwind CSS
- ReactJS
- Vitest

## Production Deployment

Go the live site at [this link](https://reactjs-challenge-superloop.onrender.com/).

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository using the command `git clone`.
2. Run `npm install`.
3. Finally, execute `npm run dev`.

## Running Tests

To run all tests, use the command `npm run test`. For test coverage details, run `npm run coverage`.

## Decisions made and any trade-offs
1. I chose TailwindCSS to add styles quickly with custom classes and maintaining harmony between the styles.
2. I have created a custom hook to be able to extract the asynchronous request logic and handle errors outside of the component.
3. I have created a spinner to inform the user that we are getting data.
4. I have created a component(NotFound) to show the user when we do not find matches in their search.
5. I have created a context (CountryContext) to avoid prop drilling between components as they are separated by 2 levels from each other.
6. I have extracted some of the logic used in the components into utility functions to reuse them in any component.
7. I've created some tests to make sure the basic functionalities work.
8. To avoid many requests to the API, I restricted the search to a minimum of two characters.
## Issues I've Encountered and Potential Improvements
1. I would have liked to add a second parameter('options') to the custom hook useFetch to manage parameters, headers, among others. That would make the custom hook reusable for any more complex project.
2. Only for this specific scenario, knowing that the country information I get is static, and it does't change. I would have fetched the data in the background at the beginning of the page load, and I would have saved the information of all the countries in LocalStorage or IndexedDB so I would only make a single call to the API and the performance would be better since it would not handle asynchronous data, even I wouldn't need the Spinner component.
3. I would have liked, instead of having a Spinner component, to have a Skeleton for the country cards, so the user would have a clearer idea of what information we are trying to display while we wait for data.
4. I had some problems when trying to install the library [React Hooks Testing Library](https://github.com/testing-library/react-hooks-testing-library) since it is not compatible with the version of ReactJS with which I was working and I could not do the tests for useFetch custom hook.
5. To improve performance, I read the API documentation to know how to request specific attributes of the countries and not all attributes, thus improving performance, I would have liked to make two requests to the API, one to get the matches and another to get the details based on the id or country name but I did't see it necessary since it was only a couple of text type attributes, if some of the attributes had been an image in Blob format or more fields, if I had considered making a second request for getting that information.
6. I would have liked to use a library like [React Query]https://tanstack.com/query/v3/) to handle the asynchronous data and also handle the caching of information, so the application would have better performance, but I didn't see it necessary for a single request. But I faithfully believe that the majority of bugs in applications with ReactJS come from the manipulation of asynchronous data, and by doing all this data management through this library and extracting them in custom hooks it is almost unnecessary to make asynchronous calls within the useEffect.