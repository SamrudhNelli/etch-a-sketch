let choice = 0;

function func(e)
{
    if(choice == 0)
    {
        let t = e.style.opacity;
        if(t != 1)
        {
            e.style.opacity = String(parseFloat(t) + 0.1);
        }
        else if(e.style.backgroundColor != 'black')
        {
            e.style.backgroundColor = 'black';
            e.style.opacity = '0.1';
        }
    }
    else if(choice == 1)
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        e.style.opacity = '1.0';
    }
}

function res(x)
{
    if(x.button == 0)
    {
        let temp = grid.children;
        for(let i = 0; i < rows; i++)
        {
            let temp1 = temp[i].children;
            for(let j = 0; j < rows; j++)
            {
                temp1[j].style.backgroundColor = 'white';
                temp1[j].style.opacity = '1.0';
            }
        }
    }
}

const viewPortWidth = window.innerWidth;
const viewPortHeight = window.innerHeight;
const body_container = document.querySelector('.body_container');
body_container.style.margin = '0px';
body_container.style.padding = '0px';


const grid = document.querySelector('.grid');

let rows = 16;

let grids = Array.from({ length: rows }, () => Array(rows));

for(let i = 0; i < rows; i++)
{
    grids[i] = document.createElement('div');
    grids[i].style.flexDirection = 'row';
    for(let j = 0; j < rows; j++)
    {
        grids[i][j] = document.createElement('div');
        grids[i][j].style.border = '1px solid black';
        grids[i][j].style.margin = '0px';
        grids[i][j].style.backgroundColor = 'white';
        grids[i][j].style.opacity = '1.0';
        grids[i][j].style.flexDirection = 'column';
        grids[i].append(grids[i][j]);
        grids[i][j].addEventListener('mouseover', function() { func(grids[i][j]); });
        grids[i][j].addEventListener('mouseup', function() { func(grids[i][j]); });
        if(viewPortHeight > viewPortWidth)
        {
            console.log('viewPortHeight > viewPortWidth');
            console.log(viewPortHeight, viewPortWidth);
            grids[i][j].style.height = (0.7/rows)*viewPortWidth + 'px';
            grids[i][j].style.width = (0.7/rows)*viewPortWidth + 'px';
        }
        else
        {
            console.log('viewPortWidth > viewPortHeight');
            console.log(viewPortHeight, viewPortWidth);
            grids[i][j].style.height = (0.7/rows)*viewPortHeight + 'px';
            grids[i][j].style.width = (0.7/rows)*viewPortHeight + 'px';
        }
    }
    grid.append(grids[i]);
}


const option = document.querySelector('.option');

const reset = document.querySelector('.button');
reset.addEventListener('mouseup', res);

const rainbow = document.querySelector('.rainbow');
rainbow.innerText = 'Rainbow';
rainbow.addEventListener('mouseup', function() {
    choice = 1; });
option.append(rainbow);

const black = document.querySelector('.black');
black.innerText = 'Greyscale';
black.addEventListener('mouseup', function() {
    choice = 0; });
option.append(black);

const buttons = document.querySelectorAll('.button');
const header = document.querySelector('#header');

if(viewPortHeight > viewPortWidth)
{
    grid.style.margin = 0.03 * viewPortWidth + "px";
    // option.style.width = 0.20 * viewPortWidth + "px";
    // option.style.height = 0.50 * viewPortWidth + "px";
    option.style.flexDirection = 'row';
    option.style.justifyContent = 'center';
    header.style.fontSize = 0.06 * viewPortWidth + "px";
    option.style.alignItems = 'center';
    buttons.forEach(button => {
        button.style.height = 0.1 * viewPortWidth + "px";
        button.style.fontSize = 0.035 * viewPortWidth + "px";
        button.style.margin = 0.03 * viewPortWidth + "px";
        button.style.width = 0.30 * viewPortWidth + "px";
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.display = 'flex';
        button.style.padding = '0px';
        button.style.boxShadow = "0px 0.8vw #999999";
    });
}
else
{
    grid.style.margin = 0.06 * viewPortHeight + "px";
    header.style.paddingLeft = 0.3 * viewPortHeight + "px";
}