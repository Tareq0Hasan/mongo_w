const {client}= require("./dbConfig")

const insertval= async ()=>{

try{

const database = client.db('School');
const user= database.collection('students');
const doc = {
    name:'ovi hasan'
}
const result = await user.insertOne(doc);
console.log(`a document was iserted with id ${result.insertedId}`);
}catch(error){
    console.log(error);
}finally{
    await client.close();
}

}

insertval();

