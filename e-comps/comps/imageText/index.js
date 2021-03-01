function imageTextUI(src="public/red-shirt.svg", par="of all fabrics are made of plastic")
{
    return `
    <div style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 25px 0 25px 0;
    ">
        <img src="${src}">
        <p style="
            display: flex;
            align-items: center;
            text-align: left;
            margin-left: 20px;
            margin-right: 20px;
            width: 170px;
        ">${par}</p>
    </div>`
}
// export const imageTexts = imageTextUI()
