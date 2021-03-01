function ListLayoutUI(text="1. buy clothes from <br>sustainable brands",
image="../../images/lightbulb.png", width="90px")
{
    return`
    <div style=" min-width: 375px;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    padding: 16px;   
    background-color: rgb(200, 230, 180);">
        <h2 style=" text-align: center;
        font-family: 'Lexend Giga', sans-serif;
        font-weight: 400;">${text}</h2>
        <img style="width:${width};" src=${image}>
    </div>    
    
    `
}

// export const ListLayout = ListLayoutUI()