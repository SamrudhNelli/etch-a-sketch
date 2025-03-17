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
        grids[i][j].style.border = '2px solid black';
        grids[i][j].style.margin = '0px';
        grids[i][j].style.height = '40px';
        grids[i][j].style.backgroundColor = 'white';
        grids[i][j].style.flexDirection = 'column';
        grids[i].append(grids[i][j]);
    }
    grid.append(grids[i]);
}
