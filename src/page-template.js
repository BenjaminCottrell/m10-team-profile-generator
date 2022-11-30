function startHTML(teamMembers) {
    const html =
        // using template literal with HTML formatting
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Team Profile Generator</title>
    </head>
    
    <body class="flex flex-col h-screen justify-between">
    
        <header class="p-8 bg-rose-700 mb-6">
            <h1 class="text-white text-center text-5xl"><a href="./test.html"
                    class="hover:text-slate-300 ease-in-out duration-300"><i class="fa-solid fa-people-group"></i></a> Team Profile Generator
            </h1>
        </header>
        
        <main>
            <section id="aside-top" class="flex flex-wrap m-2 gap-auto justify-around"></section>
        </main>
        
        <footer class="bg-rose-700 grid grid-cols-1 justify-items-center mt-6 pb-1">
            <nav class="grid grid-cols-3 justify-items-center max-w-7xl w-10/12">
                <div class="py-3 text-center">
                    <a href="https://github.com/BenjaminCottrell" target="_blank" rel="noopener noreferrer"
                        class="ease-in-out duration-300 text-white hover:text-slate-300 px-2 py-2 rounded-md text-sm font-medium">GitHub</a>
                </div>
                <div class="py-3 text-center">
                    <a href="https://benjamincottrell.github.io/ben-cottrell-webdev-portfolio//" target="_blank"
                        rel="noopener noreferrer"
                        class="ease-in-out duration-300 text-white hover:text-slate-300 px-2 py-2 rounded-md text-sm font-medium">Portfolio</a>
                </div>
            </nav>
        </footer>
    </body>

    </html>`;

  cards = [];
    for (i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            const manager = generateManager(teamMembers[i]);
            cards.push(manager);
        }
        if (teamMembers[i].getRole() === "Engineer") {
            const engineer = generateEngineer(teamMembers[i]);
            cards.push(engineer);
        }
        if (teamMembers[i].getRole() === "Intern") {
            const intern = generateIntern(teamMembers[i]);
            cards.push(intern);
        }
    }

    employees = cards.join(" ");

    return html + employees;
}

const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="block rounded-lg shadow-lg bg-slate-100 w-96 text-center m-5 break-words">
            <div class="py-3 px-6 border-b border-gray-300 bg-rose-700 text-white text-2xl rounded-t-lg">
                <h2>${manager.name}</h2>
                <p class="text-xl"><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <div class="p-6">
                <ul class="bg-white p-3 border border-gray-300 rounded-md">
                    <li class="border-b border-gray-300 p-2 pt-0">ID: ${manager.id}</li>
                    <li class="border-b border-gray-300 p-2">Email: <a href="mailto:${manager.email}"
                            class="text-rose-600 hover:text-rose-400">${manager.email}</a></li>
                    <li class="p-2 pb-0">Office number: ${manager.office}</li>
            </ul>
        </div>
    </div>
            `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
            return `
                    <div class="block rounded-lg shadow-lg bg-slate-100 w-96 text-center m-5 break-words">
                        <div class="py-3 px-6 border-b border-gray-300 bg-rose-700 text-white text-2xl rounded-t-lg">
                            <h2>${engineer.name}</h2>
                            <p class="text-xl"><i class="fa-solid fa-code"></i> Engineer</p>
                        </div>
                        <div class="p-6">
                            <ul class="bg-white p-3 border border-gray-300 rounded-md">
                                <li class="border-b border-gray-300 p-2 pt-0">ID: ${engineer.id}</li>
                                <li class="border-b border-gray-300 p-2">Email: <a href="mailto:${engineer.email}"
                                        class="text-rose-600 hover:text-rose-400">${engineer.email}</a></li>
                                <li class="p-2 pb-0">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank"
                                        class="text-rose-600 hover:text-rose-400">${engineer.gitHub}</a></li>
                            </ul>
                        </div>
                    </div>
            `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="block rounded-lg shadow-lg bg-slate-100 w-96 text-center m-5 break-words">
        <div class="py-3 px-6 border-b border-gray-300 bg-rose-700 text-white text-2xl rounded-t-lg">
            <h2>${intern.name}</h2>
            <p class="text-xl"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
        </div>
        <div class="p-6">
            <ul class="bg-white p-3 border border-gray-300 rounded-md">
                <li class="border-b border-gray-300 p-2 pt-0">ID: ${intern.id}</li>
                <li class="border-b border-gray-300 p-2">Email: <a href="mailto:${intern.email}"
                        class="text-rose-600 hover:text-rose-400">${intern.email}</a></li>
                <li class="p-2 pb-0">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
            `;
    };

    // use the team array to generate pieces of html based on the employee role
};

module.exports = startHTML;