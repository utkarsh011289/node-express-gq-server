import getDB from "./common/dbConn.js";

export const resolvers = {
     Query: {
        getName: function () {
              return "Srijesh"
        },
        getUsers: function () {
            return [
                  {
                      name:"Shiva",
                      loc:"Germany"
                  },
                  {
                      name:"Hari",
                      loc:"Europe"
                  }
            ]
        },
        getStudents: async function () {
            try{
                const db=await getDB();
                const collection=db.collection('students');
                const result= await collection.find().toArray();
                return result
                }  catch(ex) {
                      return ex;
                 }
        }
     }, 

    Mutation: {
        saveUser: function () {
              return true
        },
        savePlayer: function (a,inputData,c,d) {
             console.log('data',inputData)
             return 1;
        },
        saveStudent:async function (a,inputData,c,d) {
            try{
                const data=inputData.data;      
                const db=await getDB();
                const collection=db.collection('students')
                const result= await collection.insertOne(data)
                return result;
               }  catch(ex) {
                     return ex;
               }
             }
     }
}