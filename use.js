    const main = new Promise((resolve, reject) => {
        let a = 5 + 5;
        if (a == 10) {
            resolve('success');
        } else {
            reject('Failed');
        }
    });
    // .then runs for the resolve which handles success
    main.then((message) => {
        console.log('The sum is added then ' + message);
        // .catch runs for the reject handling failure
    }).catch((message) => {
        console.log('The sum has ' + message)
    });


    // Replacing callBacks with promises
    const userLeft = false;
    const userWatchingCatMeme = true;

    function watchTutorialCallback(callback, errorCallback) {
        if ( userLeft) {
            errorCallback({
                name: 'User unavailable',
                message: 'None'
            })
        } else if (userWatchingCatMeme) {
            errorCallback({
                name: 'User is watching cat meme',
                message: 'The meme is being watched'
            })
        } else {
            callback('Subscribe to our channel for more memes')
        }
    }

    watchTutorialCallback((message) => {
        console.log('Success:' + message)
    }, (error) => {
        console.log(error.name + ' ' + error.message)
    });

    // Implementing it using promises instead of callbacks

    const userLeft = false;
    const userWatchingCatMeme = true;

    function watchTutorialPromise() {
        return new Promise((resolve, reject) => {
            if ( userLeft) {
                reject({
                    name: 'User unavailable',
                    message: 'None'
                })
            } else if (userWatchingCatMeme) {
                reject({
                    name: 'User is watching cat meme',
                    message: 'The meme is being watched'
                })
            } else {
                resolve('Subscribe to our channel for more memes')
            }
        });
    }
    
    watchTutorialPromise().then((message) => {
        console.log('Success:' + message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message)
    });

    // Other operations involving Promises
    const recordVideoOne = new Promise((resolve, reject) => {
        resolve('Video one Recorded');
    });

    const recordVideoTwo = new Promise((resolve, reject) => {
        resolve('Video two Recorded');
    });

    const recordVideoThree = new Promise((resolve, reject) => {
        resolve('Video 3 Recorded');
    });
    // Promise.all populate every video recorded, when it's done its will call the .then and .catch depending on if they resolve or reject

    Promise.all([
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree
    ]).then((messages) => {
        // console.log(messages);
    });

    // Using promise .race returns as soon as the first recording is done
    Promise.race([
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree
    ]).then((message) => {
        console.log(message);
    });