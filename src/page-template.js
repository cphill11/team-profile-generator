const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = cardsArr => {
  return `
     <section class="my-3" id="employee">
     
    <div class="flex-row justify-space-between">
      ${cardsArr
        .filter(({ feature }) => feature instanceof Manager)
        .map(({ name, id, email, officeNumber }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="employee-item-title text-light">${name}</h3>
            <h4 class="employe-item-title text-light">${id}</h4>
            <h4 class="employe-item-title text-light">${email}</h4>
            <h4 class="employe-item-title text-light">${officeNumber}</h4>

          </div>
        `;
      })
        .join('')}
  
      ${cardsArr
        .filter(({ feature }) => feature instanceof Engineer)
        .map(({ engineerName, engineerId, engineerEmail, engineerGitHub }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="employee-item-title text-light">${engineerName}</h3>
            <h4 class="employe-item-title text-light">${engineerId}</h4>
            <h4 class="employe-item-title text-light">${engineerEmail}</h4>
            <h4 class="employe-item-title text-light">${engineerGitHub}</h4>
  
          </div>
        `;
      })
        .join('')}

      ${cardsArr
         .filter(({ feature }) => feature instanceof Intern)
         .map(({ internName, InternId, internEmail, internSchool }) => {
           return `
           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
             <h3 class="employee-item-title text-light">${internName}</h3>
             <h4 class="employe-item-title text-light">${InternId}</h4>
             <h4 class="employe-item-title text-light">${internEmail}</h4>
             <h4 class="employe-item-title text-light">${internSchool}</h4>
    
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
    console.log(templateData);
  
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
      
        </div>
      </header>
      

      <main class="container my-5">
        ${generateCards(templateData)}
      </main>

    </body>
    </html>
    `;
  };

  //module.exports = generatePage;