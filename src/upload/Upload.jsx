import React from 'react'

const Upload = () => {
    const displayContent = () => {
        // Collect form data
        const image1 = document.getElementById('image1').value;
        const image2 = document.getElementById('image2').value;
        const image3 = document.getElementById('image3').value;
        const image4 = document.getElementById('image4').value;
        const price = document.getElementById('price').value;
        const productCode = document.getElementById('productCode').value;
        const description = document.getElementById('description').value;
        const feature1 = document.getElementById('feature1').value;
        const feature2 = document.getElementById('feature2').value;
        const feature3 = document.getElementById('feature3').value;
        const feature4 = document.getElementById('feature4').value;

        // Construct the HTML code
        let htmlContent = "<!--[ Image slider starts here ]--><div id='post-slider'><div id='postslider'><ul>";
        // Add image URLs to the HTML content
        htmlContent += `<li><img alt='' src='${image1}' /></li>`;
        htmlContent += `<li><img alt='' src='${image2}' /></li>`;
        htmlContent += `<li><img alt='' src='${image3}' /></li>`;
        htmlContent += `<li><img alt='' src='${image4}' /></li>`;
        htmlContent += "</ul><a href='javascript:;' id='postsliderNext'></a> <a href='javascript:;' id='postsliderPrev'></a></div></div>";
        // Add price and product code to the HTML content
        htmlContent += "<!--[ Image slider ends here ]--><!--[ Product details starts here ]-->";
        htmlContent += `<strike>price/₹${price}</strike><div id='desc'><div class='prod-wrap'><span class='prod-id' data-text='Product code:'>${productCode}</span><span class='in-stock'>In Stock</span></div></div>`;
        // Add table and description to the HTML content
        htmlContent += "<table class='marketplace hide'><tbody><tr><td class='status'>off</td><td class='link'>https://www.ebay.com/YOUR-PROFILE</td><td class='link'>https://www.amazon.com/YOUR-PROFILE</td><td class='link'>https://www.bestbuy.com/YOUR-PROFILE</td><td class='link'>https://www.walmart.com/YOUR-PROFILE</td></tr></tbody></table>";
        htmlContent += "<!--[ Product details ends here ]--><!--[ Product description starts here ]-->";
        htmlContent += "<ul class='tabs'><li class='active' data-open='#tab1'>Description</li><!-- <li data-open='#tab2'>Specification</li> --></ul>";
        htmlContent += `<div class='tab-content active' id='tab1'>${description}<h3>Key features</h3><ol>`;
        // Add features to the HTML content
        htmlContent += `<li>${feature1}</li>`;
        htmlContent += `<li>${feature2}</li>`;
        htmlContent += `<li>${feature3}</li>`;
        htmlContent += `<li>${feature4}</li>`;
        htmlContent += "</ol></div>";

        // Display the content in a <h3> tag
        const content = htmlContent;
        const h3Element = document.getElementById('f-code');
        h3Element.textContent = content;
    };

    const copyCode = () => {
        const element = document.getElementById('f-code');
        const text = element.innerText.trim();
        navigator.clipboard.writeText(text);
    };

    const clearCode = () => {
        document.getElementById('description').value = '';
        document.getElementById('feature1').value = '';
        document.getElementById('feature2').value = '';
        document.getElementById('feature3').value = '';
        document.getElementById('feature4').value = '';
        document.getElementById('f-code').innerText = '';
    };

    return (
<div className=' pt-36'>
            <center>
                <h1>Control Panel</h1>

                <form id="postForm  ">
                    <label htmlFor="image1">Image 1 Link:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="image1" name="image1" /><br /><br />

                    <label htmlFor="image2">Image 2 Link:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="image2" name="image2" /><br /><br />

                    <label htmlFor="image3">Image 3 Link:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="image3" name="image3" /><br /><br />

                    <label htmlFor="image4">Image 4 Link:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="image4" name="image4" /><br /><br />

                    <label htmlFor="price">Price:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="price" name="price" /><br /><br />

                    <label htmlFor="productCode">Product Code:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="productCode" name="productCode" /><br /><br />

                    <label htmlFor="description">Description:</label>
                    <textarea className="inp bg-gray-400 text-white rounded-sm" id="description" name="description"></textarea><br /><br />

                    <label htmlFor="feature1">Key Feature 1:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="feature1" name="feature1" /><br /><br />

                    <label htmlFor="feature2">Key Feature 2:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="feature2" name="feature2" /><br /><br />

                    <label htmlFor="feature3">Key Feature 3:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="feature3" name="feature3" /><br /><br />

                    <label htmlFor="feature4">Key Feature 4:</label>
                    <input className="inp bg-gray-400 text-white rounded-sm" type="text" id="feature4" name="feature4" /><br /><br />

                    <input className='bg-green-400 text-gray hover:bg-green-500 duration-300 hover:text-white'
                        style={{ height: '30px', width: '300px' }} onClick={displayContent} type="button" value="Upload" />
                </form><br /><br />

                <h3 id="f-code" style={{ fontSize: '15px', width: '700px', color: 'rgb(11, 98, 69)' }}>
                    Final Code
                </h3>
                <button id="copy-code" className='bg-blue-300 text-black hover:bg-blue-500 hover:text-white duration-300' onClick={copyCode} style={{ height: '30px', width: '300px' }}>Copy Code</button><br /><br />
                <button id="clear-code" className='bg-red-400 text-white hover:bg-red-500 hover:text-gray-300 duration-300 ' onClick={clearCode} style={{ height: '30px', width: '300px' }}>Clear Code</button><br /><br /><br /><br />
            </center>
            <style>
                {`.inp {
            width: 350px;
            height: 25px;
          }`}
            </style>
        </div>
    );
}

export default Upload