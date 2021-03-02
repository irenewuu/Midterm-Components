function RnRUI(id="rnr-div", title="Heading Title", img_url="")
{
    return`
    <div style="
    display: flex;
    flex-direction: row;
    max-width: 375px;
    min-width: 375px;
    margin: 0 auto;
    ">
        <div id="${id}">
            <p style="
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            align-items: center;
            justify-content: center;
            text-align: center;
            ">${title}</p>
            <img src="${img_url}">
        </div>
    </div>

        `
}

//export const RnR = RnRUI();
