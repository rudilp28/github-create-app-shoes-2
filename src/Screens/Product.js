import React from 'react';
import data from'../data';
import { Link } from 'react-router-dom';

// const valHtml = () => {

    
//     let copyText = document.getElementsByTagName("html")[0];
//     let test = copyText.children[1]
//     let test1 = test.children[1]
//     let test2 = test1.children[0]
//     let test3 = test2.children[2]
//     let test4 = test3.children[0]
//     let test5 = test4.children[0]
    
    


//     console.log(test5)
//         let input = document.createElement("input");
//         input.id = "inp";
//         input.value = test5.outerHTML;
//         test5.appendChild(input);
        
//         let copy = document.getElementById('inp');
//         copy.select();
//         document.execCommand("Copy");
//         alert("O texto copiado foi: " + copy.value);
        
//         test5.removeChild(input);

//   }

function ProductScreen(props) {
    
    const product = data.products.find(x => x._id === props.match.params.id);
    return  <div className="tudo">
                <div>
                    <Link to="/">Back to Result</Link>
                </div>

                <div className="container-details">
                    <div className="details-image">
                        <img src={product.image} alt="product"></img>
                    </div>

                    <div className="row-details">
                        <div className="details">
                            <h1>{product.name}</h1>
                            <h4>{product.brand}</h4>
                        </div>

                        <div className="details-info">
                            <ul>
                                <li>
                                    {product.rating} Stars ({product.numReview} Reviews)
                                </li>
                                <li>
                                    <h2>{product.price}</h2>
                                </li>
                                <li>
                                    Description:
                                    <div className="description-text">
                                        <p>{product.description}</p>
                                    </div>
                                    {/* <button onClick={valHtml}>
                                                &#9776;
                                    </button> */}
                                                    
                                </li>
                             </ul>
                        </div>  
                    </div>
                    <div className="detais-action">
                        <ul>
                            <li>
                                Tamanho: <select>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                </select>
                            </li>
                            <li>
                                <button className="button primary">Add ao carrinho</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
}

export default ProductScreen;