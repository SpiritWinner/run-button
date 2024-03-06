const btn = document.getElementById('btn');
const yes = document.getElementById('yes');
const body = document.body;

let isAbsolute = false;

btn.addEventListener('mouseover', moveButton);
btn.addEventListener('touchstart', moveButton);

yes.addEventListener('click', showAlert);

function moveButton(event) {

    if (!isAbsolute) {
        btn.style.position = 'absolute';
        isAbsolute = true;
    }

    const btnRect = btn.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();

    const maxX = bodyRect.width - btnRect.width;
    const maxY = bodyRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    const newX = Math.max(0, Math.min(randomX, maxX));
    const newY = Math.max(0, Math.min(randomY, maxY));

    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
}

function showAlert() {
    alert('Тогда пиши в лс, где и когда');
}