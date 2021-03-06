const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = cardsArr => {
  console.log(cardsArr
    .filter(( feature ) => 
      { console.log(feature);
        return feature instanceof Manager
      })
    
    .map(({ name, id, email, officeNumber }) => {
      return `
      <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column" id="employee-card">
        <h3 class="employee-item-title text-light" id="employee-name"s>${name}</h3>
        <<div>
        <div class="col-12 col-md-6 mb-2 text-light p-3 flex-column">
          <h4 class="employee-item-title text-primary">ID: ${id}</h4>
          <h4 class="employee-item-title text-primary flex-column">Email:
            <a href="mailto:${email}">${email}</a></h4>
          <h4 class="employee-item-title text-primary flex-column">Office Number: ${officeNumber}</h4>
        </div>
      </div>
      </div>
    `;
  })
    .join(''));
  return `
     <section class="my-3" id="employee">
     
    <div class="flex-row justify-space-between">
      ${cardsArr
        .filter(( feature ) => feature instanceof Manager)
        .map(({ name, id, email, officeNumber }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column" id="employee-card">
            <h2 class="employee-item-title text-light" id="employee-name">${name}</h3>
            <h3 class="employee-item-title text-light" id="employee-title">Manager</h3>
            <div>
              <div class="col-12 col-md-6 mb-2 text-light p-3 flex-column">
                <h4 class="employee-item-title text-primary">ID: ${id}</h4>
                <h4 class="employee-item-title text-primary flex-column">Email:
                  <a href="mailto:${email}">${email}</a></h4>
                <h4 class="employee-item-title text-primary flex-column">Office Number: ${officeNumber}</h4>
              </div>
            </div>
          </div>
        `;
      })
        .join('')}
  
      ${cardsArr
        .filter(( feature ) => feature instanceof Engineer)
        .map(({ name, id, email, github }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column" id="employee-card">
            <h2 class="employee-item-title text-light" id="employee-name">${name}</h3>
            <h3 class="employee-item-title text-light" id="employee-title">Engineer</h3>
            <div>
              <div class="col-12 col-md-6 mb-2 p-3 flex-column">
                <h4 class="employee-item-title text-primary">ID: ${id}</h4>
                <h4 class="employee-item-title text-primary flex-column">Email:
                  <a href="mailto:${email}">${email}</a></h4>
                <h4 class="employee-item-title text-primary flex-column">GitHub Username:
                  <a href="https://github.com/${github}" target="_blank">${github}</a></h4>
              </div>
            </div>
          </div>
        `;
      })
        .join('')}

      ${cardsArr
         .filter(( feature ) => feature instanceof Intern)
         .map(({ name, id, email, school }) => {
           return `
           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column" id="employee-card">
             <h2 class="employee-item-title text-light" id="employee-name">${name}</h3>
             <h3 class="employee-item-title text-light" id="employee-title">Intern</h3>
             <div>
              <div class="col-12 col-md-6 mb-2 p-3 flex-column">
                <h4 class="employee-item-title text-primary">ID: ${id}</h4>
                <h4 class="employee-item-title text-primary flex-column">Email:
                  <a href="mailto:${email}">${email}</a></h4>
                <h4 class="employee-item-title text-primary flex-column">School: ${school}</h4>
              </div>
            </div>
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
    console.log(templateData);
    console.log(generateCards(templateData));
    console.log(templateData[0] instanceof Manager);
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
        <h1 class="page-title text-secondary py-2 px-3">My Team</h1>
        </div>
      </header>
      
      <main class="container my-5">
        ${generateCards(templateData)}
      </main>

    </body>
    </html>
    `;
  };
