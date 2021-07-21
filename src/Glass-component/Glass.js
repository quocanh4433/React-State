import React, { Component } from 'react'

export default class Glass extends Component {
    productList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        srcImg : "./glassesImage/v1.png",
        nameGlass : "GUCCI G8850U",
        descGlass : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        
    }

    renderTable = () => {
        let contentTable = this.productList.map((product, index) => {
            return  <div className="glass-item" key={product.id}>
                <div className="glass-img" onClick={() => {
                    this.handleChagneGlass(
                        `${product.url}`,
                        `${product.name}`,
                        `${product.desc}`,
                    )
                }}>
                    <img src={product.url} alt={product.name}/>
                </div>
            </div>
        })
        return contentTable
    }

    handleChagneGlass = (model,name,desc) => {
        this.setState({
            srcImg : model,
            nameGlass: name,
            desGlass: desc
        })
    }
    render() {
        return (
            <section className="app" style={{ backgroundImage: "url(/glassesImage/background.jpg)"}}>
                <h1>TRY GLASSES APP ONLINE</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="/glassesImage/model.jpg" alt="model"/>
                            <img className="glass-demo" src={this.state.srcImg} alt="model"/>
                            <div className="glass-info">
                                <h4>{this.state.nameGlass}</h4>
                                <p>{this.state.descGlass}</p>
                            </div>
                        </div>
                        <div>
                            <img src="/glassesImage/model.jpg" alt="model"></img>
                        </div>
                    </div>
                    <div className="glass-model">
                        {this.renderTable()}
                    </div>
                </div>
            </section>
        )
    }
}
