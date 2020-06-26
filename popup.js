
/// Edit these links:

const links = {
    //Add your Website:
    portfolioLink: 'http://renatamiri.uk/',
    
    // Add your Linkedin:
    linkedinLink: 'https://www.linkedin.com/in/renatamiriuk/',

    // Add your Github:
    githubLink: "https://github.com/rmiri",

    // Add your Medium:
    mediumLink: "https://medium.com/@r.miriuk",

    // Add your twitter:
    twitterLink: "https://twitter.com/rmiriuk"

}

/// 

const linkedin = document.getElementById('linkedinA');
const linkedinInput = {
    link: links.linkedinLink, 
    name: "Linkedin"
};

const github = document.getElementById('githubA');
const githubInput = {
    link: links.githubLink, 
    name: "Github"
};

const medium = document.getElementById('mediumA');
const mediumInput = {
    link: links.mediumLink, 
    name: "Medium"
};

const twitter = document.getElementById('twitterA');
const twitterInput = {
    link: links.twitterLink, 
    name: "Twitter"
};

const portfolio = document.getElementById('portfolioA');
const portfolioInput = {
    link: links.portfolioLink, 
    name: "Website"
};

const message = document.getElementById('message')

const copyThis = (input) => {
    const el = document.createElement('textarea');
    el.value = input.link;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    message.innerText = `Copied ${input.name}`
 
}


github.addEventListener("click", () => copyThis(githubInput));
linkedin.addEventListener("click", () => copyThis(linkedinInput));
medium.addEventListener("click", () => copyThis(mediumInput));
twitter.addEventListener("click", () => copyThis(twitterInput));
portfolio.addEventListener("click", () => copyThis(portfolioInput));

linkedinInput.onchange = function(){
    alert(linkedinInput.value)
}



