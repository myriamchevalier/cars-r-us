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
    techPackages : [
        {
            id: 1,
            package: "Basic Package",
            description: "basic sound system",
            price: 0
        }, {
            id: 2,
            package: "Navigation Package",
            description: "includes integrated navigation controls",
            price: 500
        }, {
            id: 3,
            package: "Visibility Package",
            description: "includes side and rear cameras",
            price: 2000
        }, {
            id: 4,
            package: "Ultra Package",
            description: "includes navigation and visibility packages",
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
            techPackageId: 4,
            wheelsId: 1,
            basePrice: 5000
        }
    ],
    carBuilder :{}
}

export const setPaintColors = (id) => {
    return database.carBuilder.paintColorId = id
}

export const setInteriors = (id) => {
    return database.carBuilder.interiorId = id
}

export const setTechPackages = (id) => {
    return database.carBuilder.techPackageId = id
}
export const setWheels = (id) => {
    return database.carBuilder.wheelsId = id
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechPackages = () => {
    return database.techPackages.map(techPackage => ({...techPackage}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const addCustomCar = () => {
    const newOrder = {...database.carBuilder} //current state stored in carBuilder object (choices made by user but not yet saved)
    const lastIndex = database.customOrders.length - 1  //finds last index of customOrders array
    
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now ()

    database.customOrders.push(newOrder)

    database.carBuilder = { }

    document.dispatchEvent(new CustomEvent ("stateChanged"))
}
