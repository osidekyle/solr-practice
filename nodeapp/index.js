const SolrNode = require('solr-node')
const people = require('./people.json')

var client = new SolrNode({
    host: '127.0.0.1',
    port: '8983',
    core: 'mycore',
    protocol: 'http'
});

const data = {
    website: 'Kyle Hawkins',
    url: 'http://kvhawkins.com',
    author: "Kyle",

}

/*client.update(data, function(err, result){
    if (err) {
        console.log(err)
        return;
    }
    console.log("Response:", result.responseHeader)
})

people.forEach(person => {
    client.update(person, function(err,result){
        if (err) {
            console.log(err);
            return;
        }
        console.log("Response:", result.responseHeader)
    })
})


const stringQuery = 'id:2'
const deleteAllQuery = '*'
//const objectQuery = {id: <id>}
client.delete(deleteAllQuery, function(err, result){
    if (err) {
        console.log(err);
        return;
    }
    console.log("Response:", result.responseHeader);
});*/

const genderQuery = {
    gender: "Female"
}
const authorQuery = {
    author: "Kyle"
}

const searchQuery = client.query()
.q(authorQuery)
.addParams({
    wt: 'json',
    indent: true
})

client.search(searchQuery, function(err, result){
    if (err) {
        console.log(err);
        return;
    }

    const response = result.response
    console.log(response)

    if (response && response.docs) {
        response.docs.forEach(doc => {
            console.log(doc)
        })
    }
})
