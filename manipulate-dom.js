const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// --- Add your code below ---

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!"
container.appendChild(header3);

const nextDiv = document.createElement("div");
nextDiv.style.cssText = "background-color: pink; border: 2px solid black;";
    const header1 = document.createElement("h1");
    header1.textContent = "I'm in a div";
    const para2 = document.createElement("p");
    para2.textContent = "ME TOO!";
    nextDiv.appendChild(header1);
    nextDiv.appendChild(para2);
container.appendChild(nextDiv);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});