const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



//doing the modals

const dialogBox = document.querySelector("#dialogBox");
const courseSymbol = document.querySelector("#dialogBox h1");
const closeButton = document.querySelector("#dialogBox button");
const courseName = document.querySelector("#dialogBox h2");
const courseDecription = document.querySelector("#dialogBox p");

// creating div to put the h1 and the button

const titleDiv = document.createElement("div");
titleDiv.classList.add("titleDiv");




















const currentYear = new Date().getFullYear();

const copyright = document.querySelector("#copyright");


copyright.innerHTML = `©${currentYear} Bruno dos Santos Alves | Brazil`;


// last modification

const lastModified = document.lastModified;

const lastModifiedParagraph = document.querySelector("#lastModified");

lastModifiedParagraph.innerHTML = `Last updated: ${lastModified}`;






// dinamycally displaying the courses





// function cardTemplate(card) {
//     if(card.completed === false){
//     return`
//     <div class="courseBox"><h2>${card.subject} ${card.number}</h2></div>`;
//     }

//     else{
//         return`
//     <div class="completeCourseBox"><h2>${card.subject} ${card.number}</h2></div>`;

//     }
// }




// function displayCards(cards){
//     const html = cards.map(cardTemplate)
    
//     const courseSection = document.querySelector(".courseBoxes");

//     courseSection.innerHTML = html.join("");
    
// }

function displayCards(cards){

    const courseSection = document.querySelector(".courseBoxes");
    
    cards.forEach(currentCard => {
        

        if(currentCard.completed === false){
            const div = document.createElement("div");
            div.classList.add("courseBox");
            const h2 = document.createElement("h2");

            //appending

            h2.innerHTML = `${currentCard.subject} ${currentCard.number}`;

            div.appendChild(h2);

            //event listener

            div.addEventListener("click", () => {

                showStuff(currentCard);
            });


            courseSection.appendChild(div);
        }

        else{
            
            const div = document.createElement("div");
            div.classList.add("completeCourseBox");
            const h2 = document.createElement("h2");

            //appending

            h2.innerHTML = `${currentCard.subject} ${currentCard.number}`;

            div.appendChild(h2);


            // event listener

            div.addEventListener("click", () => {

                showStuff(currentCard);
            });


            courseSection.appendChild(div);
        }
        
      


        
    });

    
};


//closing the modals

closeButton.addEventListener("click", () =>{

    dialogBox.close();
});


window.onclick = function(event){
    if(event.target == dialogBox){
        dialogBox.close();
    }
    
}



function showStuff(data){
    

    courseSymbol.textContent = `${data.subject} ${data.number}`;
    courseName.textContent = `${data.title}`;
    titleDiv.innerHTML = `${courseSymbol} ${closeButton}`;


    courseDecription.innerHTML = `${data.description} <br><br>Technology: ${data.technology}`;
    dialogBox.showModal();
};




displayCards(courses);

// doing the credits counter
const numberOfCredits = courses.reduce((totalCredits, currentCourseCredits) => {
    return totalCredits + (currentCourseCredits.credits || 0);
}, 0);



const credits = document.querySelector("#credits");

credits.innerHTML = `The total number of credits required is: ${numberOfCredits}`;

// making the buttons work

const allCourses = document.querySelector("#allCourses");

const wdd = document.querySelector("#wddCourses");

const cse = document.querySelector("#cseCourses");

const courseSection = document.querySelector(".courseBoxes");

allCourses.addEventListener("click", () => {

    courseSection.innerHTML = ``;
    displayCards(courses);

   
    const numberOfCredits = courses.reduce((totalCredits, currentCourseCredits) => {
    return totalCredits + (currentCourseCredits.credits || 0);
}, 0);

    credits.innerHTML = `The total number of credits required is: ${numberOfCredits}`;
});


wdd.addEventListener("click", () => {

    courseSection.innerHTML = ``;
    const wdd = courses.filter(course => course.subject ==="WDD");

    displayCards(wdd);


    const numberOfCredits = wdd.reduce((totalCredits, currentCourseCredits) => {
        return totalCredits + (currentCourseCredits.credits || 0);
    }, 0);

    credits.innerHTML = `The total number of credits required is: ${numberOfCredits}`;
});


cse.addEventListener("click", () => {

    courseSection.innerHTML = ``;
    const all = courses.filter(course => course.subject ==="CSE");

    displayCards(all);

    const numberOfCredits = all.reduce((totalCredits, currentCourseCredits) => {
        return totalCredits + (currentCourseCredits.credits || 0);
    }, 0);

    credits.innerHTML = `The total number of credits required is: ${numberOfCredits}`;
});









// hamburger button

const hamb = document.querySelector("#hamburguer");

const navigation = document.querySelector("#navigation");

hamb.addEventListener("click", () =>{

    navigation.classList.toggle("show");
   hamb.classList.toggle("show"); 
});