let wakeDog = function(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`
}

let leashDog = function(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`
}

let walkToPark = function(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

let throwFrisbee = function(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

let walkHome = function(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`
}

let unleashDog = function(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const activities = []
    let i = 0
    while(i < routine.length) {
        const func = routine[i]
        const activity = func(dogName, dogBreed)
        activities.push(activity)
        i++
    }
    return activities
}