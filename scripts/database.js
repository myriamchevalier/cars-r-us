const database = {
    paintColors : [
        {
            id: 1,
            name: "Silver" ,
            price: 1300
        }, {
            id: 2,
            name: "Midnight Blue" ,
            price: 1300
        }, {
            id: 3,
            name: "Firebrick Red" ,
            price: 1300
        }, {
            id: 4,
            name: "Spring Green" ,
            price: 1300
        }
    ],
    interiors : [
        {
            id: 1,
            material: "Beige Fabric",
            price: 1500
        }, {
            id: 2,
            material: "Charcoal Fabric",
            price: 1750
        }, {
            id: 1,
            material: "White Leather",
            price: 2500
        }, {  
            id: 1,
            material: "Black Leather",
            price: 3000
        }
    ],
    technologies : [
        {
            id: 1,
            package: "Basic Package",
            price: 0
        }, {
            id: 2,
            package: "Navigation Package",
            price: 500
        }, {
            id: 3,
            package: "Visibility Package",
            price: 2000
        }, {
            id: 4,
            package: "Ultra Package",
            price: 2250
        }
    ],
    wheels :[
        {
        id: 1,
        option: "17-inch Pair Radial",
        price: 0
        }, {
        id: 2,
        option: "17-inch Pair Radial Black",
        price: 250
        }, {
        id: 3,
        option: "18-inch Pair Spoke Silver",
        price: 750
        }, {
        id: 4,
        option: "18-inch Pair Spoke Black",
        price: 1000
        }
    ],
    customOrders : [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 1,
            technologyId: 4,
            wheelsId: 1,
            basePrice: 5000
        }
    ]
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}