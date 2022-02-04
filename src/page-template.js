// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
      </section>
    `;
  };

  // create the projects section
  const generateProjects = projectsArr => {
    return `
      <section class="my-3" id="employee">
       
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="employee-item-title text-light">${name}</h3>

              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="employee-item-title text-light">${name}</h3>
              <p>${description}</p>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };

// export fxn to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    
      <header>
        <div class="container flex-row justify-space-around align-center py-3">
          <h1 class="page-title text-secondary py-2 px-3">${header.name}</h1>
          <h2><a href="https://github.com/${github}">Github</a></h2>       
        </div>
      </header>
      

      <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>

    </body>
    </html>
    `;
  };
  