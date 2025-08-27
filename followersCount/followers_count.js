let count = 0;

function increaseCount() {
    count++
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers! Congrats!');
    } else if (count === 20) {
        alert('Your Instagram post gained 20 followers! Congrats!');
    }
}

function resetCount() {
    count = 0;
    displayCount();
    alert('Your Instagram followers were reset and are now 0 :(');
}

document.getElementById('reset-button').addEventListener('click', resetCount);