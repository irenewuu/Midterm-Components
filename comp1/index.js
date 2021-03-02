function HeaderUI(id="headerDiv", title="Header Title")
{
    return `
    <div style="
    max-width: 375px;
    min-width: 375px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    "
    id="${id}"
    >

    <h1 style="
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Giga', sans-serif;
    font-size: 32px;
    letter-spacing: 4px;
    font-weight: 400;
    text-align: center;
    ">${title}</h1>


    </div>`
}

//export const Header = HeaderUI();