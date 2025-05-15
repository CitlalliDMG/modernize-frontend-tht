<!-- PRESENTATION -->
<br />
<p align="center">
  <h1 align="center">Modernize | QuinStreet - Take Home Test</h1>

  <p align="center">
    Solution proposal for the Modernize | QuinStret Frontend Developer Challenge
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Technical Specifications](#technical-specifications)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [File structure](#file-structure)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Welcome to my solution proposal for the Modernize | QuinStret Frontend Developer challenge! In this repository you will find my solution to the of replicating a web page based on a Sketch design and its respective validations.

### Technical Requirements

- [x] General requirements:

  - [x] Pixel perfect (on given breakpoints)
  - [x] Cross-browser support (desktop and mobile)
  - [x] Responsive design according to provided mockups (you can use 767px as a mobile breakpoint)
  - [x] Retina support
  - [x] Any copy on the page can be changed (in the source file) and it should NOT break the page
  - [x] Background color should transition from #ECF8FB to #EFEFEF continuously with a 5 sec duration: it takes 5 sec to change the color from #ECF8FB to #EFEFEF, then 5 sec from #EFEFEF to #ECF8FB, and so on
  - [x] The page should be optimized for maximum performance and fast loading
  - [x] "Read more" link in the bottom opens google.com in a new window

- [x] Form requirements:

  - [x] Phone field should have a mask for US phone number: (XXX) XXX-XXXX
  - [x] The form should be optimized for mobile UX (do your best)
  - [x] Add form validation:
    - [x] "Name" field requires 2 or more chars
    - [x] "City" and "State" are optional
    - [x] "Phone" field is required and should have validation by mask
    - [x] "Email" field is required
    - [x] If there's an error, the field should change the border color to #D50303
    - [x] The form should submit data to https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar via ajax (ignore any errors)
    - [x] After successful submission, change the button copy to "Submitted" and do not allow any more submissions

- [x] Delivery requirements:

  - [x] Create a Github repository with your project that we can download and run
  - [x] An online demo is not required but would be fantastic!
  - [x] Please provide us with the time it took you to complete the task
  - [x] What took the most time, what was tricky?
  - [x] Any final thoughts or comments are welcome

### Built With

For the development of this project, the main technologies I used were:

- Vanilla JavaScript
- HTML
- CSS

<!-- GETTING STARTED -->

## Getting Started

To download and run the project, please follow these steps:

### Prerequisites

Before running this project, make sure you have installed a [Node](https://nodejs.org/) version higher than 16.14.0 and the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension on [VSCode](https://code.visualstudio.com/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/CitlalliDMG/modernize-frontend-tht.git
```

2. Run the live server

3. See the live page in your browser.

### File structure

The project folder should contain the following files:

```text
./modernize-frontend-tht/
├── css
│   └──  index.css
├── images
│   ├── background.svg
│   └── logo.svg
├── js
│   └── index.js
├── .gitignore
├── index.html
└── README.md

```

<!-- USAGE EXAMPLES -->

## Usage

Once you have the project running on the test server, you will see a form interface.

Play around with the interface by filling out the different fields and clicking the submit button.

You can also try clicking on the links on the page and opening the page in different resolutions and browsers.

You can also see and use the project using the github pages link

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourInitials_AmazingFeature`)
3. Commit your Changes (`git commit -m '[type] Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

Citlalli Del Moral - [portfolio](https://citlallidmg.github.io/) - citlallidmg@gmail.com

Project Link: [https://github.com/CitlalliDMG/modernize-frontend-tht](https://github.com/CitlalliDMG/modernize-frontend-tht)
