document.addEventListener("DOMContentLoaded", function() {
    const imageData = [
        {
            id: 1,
            name: "Pluto",
            kind: "German Shepherd",
            imgSrc: "./images/pluto.jpg",
            imgAlt: "Pluto",
            gender: "Male",
            age: 3,
        },
        {
            id: 2,
            name: "Blue",
            kind: "American Husky",
            imgSrc: "./images/Blue.jpg",
            imgAlt: "Blue",
            gender: "Male",
            age: 6 + 11/12, // 6 years 11 months
        },
        {
            id: 3,
            name: "Cobalt Blue",
            kind: "Siberian Husky",
            imgSrc: "./images/cobalt_blue.jpg",
            imgAlt: "Cobalt Blue",
            gender: "Male",
            age: 2,
        }
    ];

    // Example of using filter to get animals older than 3 years
    const olderAnimals = imageData.filter(animal => animal.age > 3);

    // Example of using map to create a new array with formatted ages
    const formattedAges = imageData.map(animal => {
        const years = Math.floor(animal.age);
        const months = Math.round((animal.age - years) * 12);
        return {
            ...animal,
            formattedAge: `${years} years${months ? ` ${months} months` : ''}`
        };
    });

    // Example of using reduce to count animals by gender
    const genderCount = imageData.reduce((count, animal) => {
        count[animal.gender] = (count[animal.gender] || 0) + 1;
        return count;
    }, {});

    // Conditional branching example
    if (genderCount.Male > 2) {
        console.log("There are more than 2 male animals.");
    } else {
        console.log("There are 2 or fewer male animals.");
    }

    const pictureSection = document.createElement('section');
    pictureSection.className = 'picture';

    // Using forEach to append elements to the DOM
    formattedAges.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.className = 'animal';

        const img = document.createElement('img');
        img.src = animal.imgSrc;
        img.alt = animal.imgAlt;

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';

        const h3 = document.createElement('h3');
        h3.textContent = animal.name;

        const pKind = document.createElement('p');
        pKind.textContent = animal.kind;

        const pGender = document.createElement('p');
        pGender.textContent = animal.gender;

        const pAge = document.createElement('p');
        pAge.textContent = animal.formattedAge;

        infoDiv.appendChild(h3);
        infoDiv.appendChild(pKind);
        infoDiv.appendChild(pGender);
        infoDiv.appendChild(pAge);

        animalDiv.appendChild(img);
        animalDiv.appendChild(infoDiv);

        pictureSection.appendChild(animalDiv);
    });

    document.body.appendChild(pictureSection);
});
