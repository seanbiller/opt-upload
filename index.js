const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))


app.get('/', (request, response) => {
    response.sendFile(__dirname+"/index.html")
})

app.post('/', function(request, response) {
    if(request.files){
        console.log(request.files)
    }
      })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`))