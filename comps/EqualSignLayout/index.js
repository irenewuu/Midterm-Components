function EqualSignLayoutUI(text1="2,700L <br>of water", 
image="../../images/redshirt.png", text2="The amount of water <br>used to make a cotton <br>t-shirt:",)
{
    return`
    <div style="background-color:rgb(200, 230, 180) ;
    min-width: 375px;
    max-width: 375px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 16px;">
        <p style="text-align:center;
        font-family: 'Montserrat', sans-serif;
        ">${text2}</p>
        <div style="display:flex; flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center; 
            padding-left: 20px;
            padding-right: 20px;">
            <img style="padding-left: 20px;
            padding-right: 20px;" src=${image}>
            <h2 style=" text-align: center;
            font-family: 'Lexend Giga', sans-serif;
            font-weight: 400;">=</h2>
            <div style="padding-left: 20px;
            padding-right: 20px;">
                <img src= "../../images/waterdroplet.png"/>
                <p>${text1}</p>
            </div>
        </div>
    </div>
    `
}
// export const EqualSignLayout = EqualSignLayoutUI();