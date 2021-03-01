function textImageUI(par="Just washing a batch of clothes can create 17 million microfibres", src="public/water-drop.svg")
{
    return `
    <div style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 25px 0 25px 0;
    ">
        <p style="
            display: flex;
            align-items: center;
            text-align: left;
            margin-left: 20px;
            margin-right: 20px;
            width: 170px;
        ">${par}</p>
        <img src="${src}">
    </div>`
}
// export const textImages = textImageUI()
