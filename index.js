let exercises = [
    {
        title: "Bracing maneuver",
        text: {
            title: "Muscle group:",
            description: "Abdomen.",
            subTitle: "Execution method:",
            mistakesDescription: "Lie on your back on the floor, feet hip-width apart and flat on the ground, palms facing up, chin tucked in, and shoulder blades retracted. Inhale fully, then forcefully exhale through your mouth, closing your ribs in the process. Keep the ribs closed and contract your abdomen by pulling your belly button inward as if trying to touch it to your spine. Maintain normal breathing without losing the contraction.",
        },
        img: "/img_alongamentos/0.0-bracing.png",
        limb: "all",
        difficulty: "all"
    },
    {
        title: "Standing calves",
        text: {
            title: "Muscle group:",
            description: "Gastrochnemius and soleus.",
            subTitle: "Common mistakes:",
            mistakesDescription: "Inactive bracing, back leg bent, back heel lifted off the ground, lost plantar arch, and vertical torso not aligning with the incline of the back leg.",
        },
        img: "/img_alongamentos/1.1-panturrilhas-em-pe.png",
        limb: "lower",
        difficulty: "beginner"
    },
    {
        title: "Bilateral calves on a step or wall bars",
        text: {
            title: "Muscle group:",
            description: "Gastrochnemius and soleus.",
            subTitle: "Common mistakes:",
            mistakesDescription: "Inactive bracing, lumbar hyperlordosis, failure to relax the calf, lost plantar arch, and loss of toe support at the base.",
        },
        img: "/img_alongamentos/1.2-panturrilhas-bilateral-degrau.png",
        limb: "lower",
        difficulty: "advanced"
    },
];

let main = document.querySelector("main");

for (let i = 0; i < exercises.length; i++) {
    let current = exercises[i];


    let div = document.createElement("div");
    main.appendChild(div);
    div.className = "exercise-container";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);

    let title = document.createElement("h6");
    div.appendChild(title);
    title.textContent = current.title;

    let textTitle = document.createElement("p");
    div.appendChild(textTitle);
    textTitle.textContent = current.text.title;
    textTitle.className = "p-bold";

    let textDescription = document.createElement("p");
    div.appendChild(textDescription);
    textDescription.textContent = current.text.description;

    let textSubtitle = document.createElement("p");
    div.appendChild(textSubtitle);
    textSubtitle.textContent = current.text.subTitle;
    textSubtitle.className = "p-bold";

    let textMistakes = document.createElement("p");
    div.appendChild(textMistakes);
    textMistakes.textContent = current.text.mistakesDescription;

    let img = document.createElement("img");
    img.src = current.img;
    div.appendChild(img);

};

function filterExercises() {
    const limbFilter = document.getElementById("filterLimbs").value;
    const levelFilter = document.getElementById("filterLevels").value;

};