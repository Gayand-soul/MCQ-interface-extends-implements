
const questions = [
    {
        question:"Vilket av följande är en giltig typ i TypeScript?",
        answers: [
            {text: "string | number", correct: true},
            {text: "boolean & object", correct: false},
            {text: "var", correct: false},
            {text: "mixed", correct: false},

        ]
    },
    {
        question:"Hur anger du en funktion i TypeScript med typade parametrar och returtyp?",
        answers: [
            {text: "function add(a, b): number { return a + b; }", correct: false},
            {text: "let add = (a: number, b: number): number => a + b;", correct: true},
            {text: "let add: (a, b) -> number = (a, b) => a + b;", correct: false},
            {text: "function add(a: number, b: number) { return a + b; }", correct: false},

        ]
    },
    {
        question:" Vad är ett interface i TypeScript?",
        answers: [
            {text: "En klass som kan ärva från andra klasser", correct: false},
            {text: "Ett sätt att definiera strukturen för ett objekt", correct: true},
            {text: "En typ av funktion", correct: false},
            {text: "En metod för att skapa generiska typer", correct: false},

        ]
    },

    {
        question:" Hur definieras en valbar egenskap i ett interface?",
        answers: [
            {text: "name: string | undefined;", correct: false},
            {text: "name?: string;", correct: true},
            {text: "optional name: string;", correct: false},
            {text: "name! : string;", correct: false},

        ]
    },

    {
        question:"Vad gör readonly i ett interface?",
        answers: [
            {text: "Hindrar att egenskapen ändras efter att den har satts", correct: true},
            {text: "Gör egenskapen skrivskyddad vid kompilering men inte vid körning", correct: false},
            {text: "Gör att egenskapen bara kan läsas i klassen som implementerar interfacet", correct: false},
            {text: " Ingenting, det är ett alias för const", correct: false},

        ]
    },
    {
        question:"Hur implementerar en klass ett interface? ",
        answers: [
            {text:"class Car implements Vehicle { ... }", correct: true},
            {text:"class Car extends Vehicle { ... }", correct: false},
            {text:"class Car uses Vehicle { ... }", correct: false},
            {text:"class Car inherits Vehicle { ... }", correct: false},
        ]

    },
    {
        question:"Vilken är den korrekta syntaxen för att ange en standardparameter i en TypeScript-funktion? ",
        answers: [
            {text:`function sayHello(user: string = "Användare") { ... }`, correct: true},
            {text:`function sayHello(user ?= "Användare") { ... } `, correct: false},
            {text:`function sayHello(user: "Användare" = string) { ... }`, correct: false},
            {text:`function sayHello(user == "Användare") { ... }`, correct: false},
        ]

    },
    {
        question:"Vilket av följande sätt används för att ärva ett interface i TypeScript?",
        answers: [
            {text:" interface ChildInterface extends ParentInterface { ... }", correct: true},
            {text:"interface ChildInterface implements ParentInterface { ... }", correct: false },
            {text:"interface ChildInterface inherits ParentInterface { ... }", correct: false},
            {text:"interface ChildInterface uses ParentInterface { ... }", correct: false},
        ]

    },

    {
        question:"Vad händer om en klass implementerar ett interface men inte definierar alla medlemmar?",
        answers: [
            {text:"Klassen kommer att kompileras men ge en varning", correct: false },
            {text:"Klassen kommer att ge ett kompilationsfel", correct: true },
            {text:"Klassen kommer att fungera men egenskaperna blir undefined", correct: false},
            {text:"TypeScript skapar automatiskt standardvärden", correct: false},
        ]

    },
    {
        question:"Vad används implements för i TypeScript?",
        answers: [
            {text:"För att låta en klass ärva från en annan klass", correct: false },
            {text:"För att skapa en ny instans av ett objekt", correct: false },
            {text:"För att ange att en klass följer ett interface", correct: true},
            {text:"För att konvertera en variabel till en annan typ", correct: false},
        ]

    },
    {
        question:"Vad blir output av följande kod?",
        code: ` interface User {
                    name: string;
                    age?: number;
                }

                const user: User = { name: "Alice" };
                console.log(user.age);`,
        answers: [
            {text:" undefined", correct: true},
            {text:" null", correct: false},
            {text:"0", correct:false },
            {text:"Error: Property 'age' is missing", correct: false},
        ]

    },
    {
        question:"Vad händer när vi försöker ändra id i nedanstående kod?",
        code: `interface Product {
                    readonly id: number;
                    name: string;
                }

                let item: Product = { id: 101, name: "Laptop" };
                item.id = 202;`,
        answers: [
            {text:" id uppdateras till 202", correct: false},
            {text:" Kompileringsfel: Cannot assign to 'id' because it is a read-only property", correct: true},
            {text:"id blir undefined", correct:false },
            {text:"Programmet kraschar vid körning", correct: false},
        ]

    },
    {
        question:"Vad skrivs ut i konsolen?",
        code:` function greet(name: string = "Guest") {
                console.log(\`Hello, \${name}!\`);
            }

            greet();`,
        answers: [
            {text:" Hello, Guest!", correct: true},
            {text:" Hello, undefined!", correct: false},
            {text:"Hello, !", correct:false },
            {text:"Kompileringsfel", correct: false},
        ]

    },
    {
        question:"Vad händer vid kompilering av koden?",
        code:`interface Vehicle {
                speed: number;
                drive(): void;
            }

            class Car implements Vehicle {
                speed = 120;
            }`,
        answers: [
            {text:" Kompileringsfel: Klassen måste implementera drive()", correct: true},
            {text:" Koden fungerar korrekt", correct: false},
            {text:"speed blir undefined", correct:false },
            {text:"drive() anropas automatiskt", correct: false},
        ]

    },
    {
        question:"Vad skrivs ut i konsolen?",
        code:`interface Person {
                name: string;
                greet(): string;
            }

            const p: Person = {
            name: "Bob",
            greet: () => "Hello!"
            };

            console.log(p.greet()); `,
        answers: [
            {text:" Hello!", correct: true},
            {text:" undefined", correct: false},
            {text:"Error: greet is not a function", correct:false },
            {text:"Hello, Bob!", correct: false},
        ]

    },
    {
        question:"Vad händer vid körning av denna kod?",
        code:`interface Shape {
                sides: number;
            }

            interface Square extends Shape {
            length: number;
            }

            const mySquare: Square = { sides: 4, length: 10 };
            console.log(mySquare.length);`,
        answers: [
            {text:"10", correct: true},
            {text:"4", correct: false},
            {text:"Kompilieringsfel", correct:false },
            {text:"undefined", correct: false},
        ]

    },
    {
        question:"Vad blir resultatet av att köra koden?",
        code:` interface Config {
                    host: string;
                    port?: number;
                }

                const server: Config = { host: "localhost" };
                console.log(server.port ?? 8080);`,
        answers: [
            {text:"localhost", correct: false},
            {text:"8080", correct: true},
            {text:"undefined", correct:false },
            {text:"Kompileringsfel", correct: false},
        ]

    },
    {
        question:"Vad händer vid kompilering?",
        code:` interface Animal {
                    makeSound(): void;
                }

                class Dog implements Animal {
                    makeSound() {
                    console.log("Woof!");
                    }
                }

                const dog = new Dog();
                dog.makeSound();`,
        answers: [
            {text:"Woof! skrivs ut", correct: true},
            {text:"Kompileringsfel: makeSound() saknas", correct: false},
            {text:"undefined skrivs ut", correct:false },
            {text:"Error: Cannot create an instance of an interface", correct: false},
        ]

    },
    {
        question:"Vilket värde har user.role efter kodens körning?",
        code:`interface User {
                 name: string;
                 role?: string;
                }

                const user: User = { name: "Alice" };
                user.role ??= "guest";

                console.log(user.role);
`,
        answers: [
            {text:"guest", correct: true},
            {text:"undefined", correct: false},
            {text:"Kompileringsfel", correct:false },
            {text:"null", correct: false},
        ]

    },
    {
        question:"Vad skrivs ut vid körning?",
        code:`interface User {
                 x: number;
                 
                }

                interface B extends User {
                    y: number;
                }

                const obj: B = { x: 5, y: 10 };
                console.log(obj.x + obj.y); `,
        answers: [
            {text:"15", correct: true},
            {text:"5", correct: false},
            {text:"10", correct:false },
            {text:"Kompileringsfel", correct: false},
        ]

    },

    {
        question:"Vad händer när vi kör denna kod?",
        code: ` function greet(name: string = "Guest") {
                    return \`Hello, \${name}!\`;
                }

                console.log(greet());`,
        answers: [
            {text:"Hello, Guest!", correct: true},
            {text:"Hello, undefined!", correct: false},
            {text:"Kompileringsfel", correct:false },
            {text:"Hello, !", correct: false},
        ]

    },

    {
        question: "Vad skrivs ut i konsolen?",
        code: `interface Person {
                    readonly name: string;
                }

                const p: Person = { name: "Alice" };
                p.name = "Bob";
                console.log(p.name); `,
        answers: [
            {text:"Bob", correct: false},
            {text:"Alice", correct: false},
            {text:"Kompileringsfel", correct:true },
            {text:"undefined", correct: false},
        ]

    },
   
    {
        question: "Vad är sant om valbara (?) egenskaper i TypeScript?",
        answers: [
            {text:" De måste alltid tilldelas ett värde.", correct: false},
            {text:"De kan vara undefined.", correct: true},
            {text:"De kan inte användas i interface.", correct:false },
            {text:"De fungerar bara med numeriska värden.", correct: false},
        ]

    },
    
    {
        question: "Vad händer vid kompilering?",
        code: ` interface Car {
                    brand: string;
                    model?: string;
                }

                const myCar: Car = { brand: "Tesla" };
                console.log(myCar.model);`,
        answers: [
            {text:"underfined", correct: true},
            {text:" (tom sträng)", correct: false},
            {text:"Kompileringsfel", correct: false},
            {text:"null", correct: false},
        ]

    },
    {
        question:"Vilken av följande klasser implementerar korrekt Animal?",
        code: ` interface Animal {
                    makeSound(): void;
                } `,
        answers: [
            {text:` class Dog implements Animal {
                        makeSound() {
                        console.log("woof");
                        }
                    }`, correct: true},
            {text:` class Dog implements Animal {
                         bark();
                         console.log("woof");
                        }
                    }`, correct: false},
            {text:` class Dog {
                        makeSound() {
                        console.log("Woof!");
                        }
                    }`, correct:false },
            {text:`class Dog implements Animal {
                        makeSound: string = "Woof!";
                    }`, correct: false},
        ]

    },
    {
        question: "Vad händer vid körning?",
        code: ` interface A {
                     x: number;
                }

                interface B extends A {
                    y: number;
                }

                const obj: B = { x: 5, y: 10 };
                console.log(obj.x + obj.y); `,
        answers: [
            {text:"15", correct: true},
            {text:"5", correct: false},
            {text:"10", correct: false},
            {text:"Kompileringsfel", correct: false},
        ]

    },
    {
        question: "Vad blir utdata från följande kodsnutt?",
        code: ` function getUserName(name?: string) {
                    return name ?? "Okänd användare";
                }

                console.log(getUserName(undefined));
                console.log(getUserName(null));
                console.log(getUserName("Alice"));`,
        answers: [
            {text:` "null", "null", "Alice"`, correct: false},
            {text:`"undefined", "null", "Alice"`, correct: false},
            {text:"Error: Kan inte använda ?? på null eller undefined", correct: false},
            {text: `"Okänd användare", "Okänd användare", "Alice"`, correct: true},
        ]

    },
    {
        question: "Vad blir utdata från följande kodsnutt?",
        code: `function getSpeed(speed?: number) {
                    return speed ?? 50;
                }
                console.log(getSpeed(0));
                console.log(getSpeed(undefined));
                console.log(getSpeed(null));
                console.log(getSpeed(80));`,
        answers: [
            {text:`"50", "50", "50", "80"`, correct: false},
            {text:`"undefined", "50", "50", "80"`, correct: false},
            {text:`"0", "50", "50", "80"`, correct: true},
            {text:`"0", "undefined", "undefined", "80"`, correct: false},
        ]

    },
    {
        question: "Vad händer vid kompilering av denna kod?",
        code: ` interface Laptop {
                    brand: string;
                    readonly model: string;
                }

                const myLaptop: Laptop = { brand: "Apple", model: "MacBook Pro" };
                myLaptop.model = "MacBook Air";`,
        answers: [
            {text:` model ändras till \"MacBook Air"\.`, correct: false},
            {text:"Kompileringsfel: model är readonly.", correct: true},
            {text:"model blir undefined..", correct: false},
            {text:"Programmet kraschar vid körning.", correct: false},
        ]

    },
    {
        question: "Vilket alternativ är SANT om ett interface ärver ett annat i TypeScript?",
        code: ` interface A {
                    name: string;
                }

                interface B extends A {
                age: number;
                }

                const person: B = { name: "Alice", age: 25 };
                console.log(person.name, person.age);`,
        answers: [
            {text:"Interface B ärver egenskapen name från A", correct: true},
            {text:"Interface B måste definiera name separat", correct: false},
            {text:"Objektet person saknar egenskapen name", correct: false},
            {text:" Programmet kraschar vid körning", correct: false},
        ]

    }

];

const codeElement = document.getElementById("code-snippet"); // Kodblock deklareras

const questionElement = document.getElementById("question"); //frågan deklareras
const answerButtons = document.getElementById("answer-btn");//svarsalternativ deklareras

const nextBtn = document.getElementById("next-btn"); //next button deklareras

//skapa fråge-index
let currentQuestionIndex = 0; //startas från 0
let score = 0;

//funktion för starta quizzet
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); //när ovan principer är OK, då kallas denna funktionen
}


function showQuestion(){
    //ta bort tidigare frågor o svar
    resetState();

    let currentQuestion = questions[currentQuestionIndex];// Hämtar den aktuella frågan
    let questionNumber = currentQuestionIndex + 1; //uppdatera frågans nr
    questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

    // Om frågan innehåller en kodsnutt
    if (currentQuestion.code) { // Om det finns kod i frågan
        codeElement.style.display = "block"; // Visa kodblocket
        codeElement.innerText = currentQuestion.code; // Lägg in kod
    } else {
        codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
    }

     //visa svaren
     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        //vid rätt svar
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //eventlisten to select answer
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//välja svar
function selectAnswer(x){
    const selectedBtn = x.target; //valda svarsalternativ
    const isCorrect = selectedBtn.dataset.correct === "true";//kontroll= om svaret är korrekt
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //efter rätt svar vad som sker...
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";//vida "next" button!

}


//score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
}

//visa nästa fråga eller invoke showscore funtion
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//...gå till nästa=klicka på nästa button
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//invoke start quiz!
startQuiz();