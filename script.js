document.getElementById('startForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;

    startStory(age, country);
});

function startStory(age, country) {
    const introElement = document.getElementById('intro');
    const storyElement = document.getElementById('story');
    const storyContentElement = document.getElementById('storyContent');
    const choicesElement = document.getElementById('choices');
    
    introElement.style.display = 'none';
    storyElement.style.display = 'block';

    let storyText = `Comienzas tu carrera de fútbol en las inferiores de un club en ${country}. Tienes ${age} años y tu sueño es convertirte en una leyenda del fútbol.`;

    storyContentElement.innerHTML = storyText;
    
    const choice1 = document.createElement('button');
    choice1.textContent = "Elegir club para iniciar";
    choice1.addEventListener('click', function() {
        chooseClub(age, country);
    });

    choicesElement.innerHTML = '';
    choicesElement.appendChild(choice1);
}

function chooseClub(age, country) {
    const storyContentElement = document.getElementById('storyContent');
    const choicesElement = document.getElementById('choices');

    let storyText = "Elige un club para iniciar tu carrera:";
    storyContentElement.innerHTML = storyText;

    const clubs = {
        argentina: [
            {name: "River Plate", logo: "images/river-plate.png", coach: "Marcelo Gallardo"},
            {name: "Boca Juniors", logo: "images/boca-juniors.png", coach: "Hugo Ibarra"},
            {name: "Independiente", logo: "images/independiente.png", coach: "Ricardo Zielinski"}
        ],
        brazil: [
            {name: "Flamengo", logo: "images/flamengo.png", coach: "Jorge Sampaoli"},
            {name: "São Paulo", logo: "images/sao-paulo.png", coach: "Dorival Júnior"},
            {name: "Palmeiras", logo: "images/palmeiras.png", coach: "Abel Ferreira"}
        ],
        england: [
            {name: "Manchester United", logo: "images/man-utd.png", coach: "Erik ten Hag"},
            {name: "Liverpool", logo: "images/liverpool.png", coach: "Jürgen Klopp"},
            {name: "Chelsea", logo: "images/chelsea.png", coach: "Mauricio Pochettino"}
        ]
    };

    choicesElement.innerHTML = '';

    clubs[country].forEach(club => {
        const button = document.createElement('button');
        button.innerHTML = `<img src="${club.logo}" alt="${club.name}" class="club-logo"> ${club.name} (Coach: ${club.coach})`;
        button.addEventListener('click', function() {
            trainHard(club);
        });
        choicesElement.appendChild(button);
    });
}

function trainHard(club) {
    const storyContentElement = document.getElementById('storyContent');
    const choicesElement = document.getElementById('choices');

    let storyText = `Has elegido iniciar en ${club.name}. Decides entrenar duro para impresionar al entrenador ${club.coach}. Después de varios meses de arduo trabajo, finalmente te invitan a entrenar con el primer equipo.`;

    storyContentElement.innerHTML = storyText;

    choicesElement.innerHTML = '';

    const choice1 = document.createElement('button');
    choice1.textContent = "Jugar amistoso con el primer equipo";
    choice1.addEventListener('click', function() {
        firstFriendlyMatch(club);
    });

    const choice2 = document.createElement('button');
    choice2.textContent = "Seguir entrenando con el primer equipo";
    choice2.addEventListener('click', function() {
        continueTraining(club);
    });

    choicesElement.appendChild(choice1);
    choicesElement.appendChild(choice2);
}

function firstFriendlyMatch(club) {
    const storyContentElement = document.getElementById('storyContent');
    const choicesElement = document.getElementById('choices');

}
