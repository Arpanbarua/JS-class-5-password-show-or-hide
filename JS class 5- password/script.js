let eyeoff = document.querySelector('.eyeoff');
let eyeon = document.querySelector('.eyeon');
let pw = document.querySelector('.pw');

pw.type = 'password';

eyeoff.addEventListener('click', function()
{
    eyeoff.style.display = 'none';
    eyeon.style.display = 'flex';
    pw.type = 'text';
});

eyeon.addEventListener('click', function()
{
    eyeoff.style.display = 'flex';
    eyeon.style.display = 'none';
    pw.type = 'password';
});

