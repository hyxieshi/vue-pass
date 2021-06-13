import userDb from '@/db/json'


var postUser = (user, pass) => {
    for (let i = 0; i < userDb.length; i++) {
        // user == userDb[i].user && pass == userDb[i].pass ? console.log('200') : console.log('err')
        if (user === userDb[i].user && pass === userDb[i].pass) {
            // this.$store.state.data =userDb[i]
            // console.log(user,pass)
            // console.log(userDb[i].user,userDb[i].pass)
            return userDb[i]
        }
    }
}

var postMag = (title, name, pass, label, user) => {
    var data = {
        'tilte': title,
        'username': name,
        'userpass': pass,
        'data': new Date(),
        'label': label
    }
    for (let i = 0; i < userDb.length; i++) {
        if (user === userDb[i].user) {
            userDb[i].data.push(data)
            console.log(userDb)
        } else {
            console.log('2')
        }
    }

}


export {
    postUser,
    postMag
}