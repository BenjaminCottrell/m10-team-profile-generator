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
    
    </html>
    `;

  }

const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `

            `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `

            `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `

            `;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}