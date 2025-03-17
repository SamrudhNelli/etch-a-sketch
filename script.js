function func(e)
{
    let t = e.style.opacity;
    if(t != 1)
    {
        console.log(t);
        e.style.opacity = String(parseFloat(t) + 0.1);
        console.log(e.style.opacity);
    }
    else if(e.style.backgroundColor == 'white')
    {
        e.style.backgroundColor = 'black';
        e.style.opacity = '0.1';
    }
}

const body_container = document.querySelector('.body_container');
body_container.style.width = screen.availWidth + 'px';
body_container.style.height = (screen.availHeight - 25) + 'px';
body_container.style.margin = '0px';
body_container.style.padding = '0px';

let container = document.querySelector('.container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

let rows = 16;

let grids = Array.from({ length: rows }, () => Array(rows));

for(let i = 0; i < rows; i++)
{
    grids[i] = document.createElement('div');
    grids[i].style.flexDirection = 'row';
    for(let j = 0; j < rows; j++)
    {
        grids[i][j] = document.createElement('div');
        grids[i][j].style.width = '40px';
        grids[i][j].style.border = '1px solid black';
        grids[i][j].style.margin = '0px';
        grids[i][j].style.height = '40px';
        grids[i][j].style.backgroundColor = 'white';
        grids[i][j].style.opacity = '1.0';
        grids[i][j].style.flexDirection = 'column';
        grids[i].append(grids[i][j]);
        grids[i][j].addEventListener('mouseover', function() { func(grids[i][j]); });
        grids[i][j].addEventListener('mouseup', function() { func(grids[i][j]); });
    }
    grid.append(grids[i]);
}
