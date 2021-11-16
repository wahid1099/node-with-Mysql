var mysql      = require('mysql');
var DatabaseConnectionConfig = {host:"localhost", user:"root", password:"", database:"my_db"};

var con=mysql.createConnection(DatabaseConnectionConfig);

 

con.connect(function (error) {
  if(error){
      console.log("Connection Fail")
  }
  else{
      console.log("Connection Success");
      //InsertData(con);
     // DeleteDataByID(con)
     UpdateData(con);
     //SelectData(con);



  }
});

function InsertData(con) {
  let SQLQuery="INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`) VALUES ('Rabbil','03','Ten','017000000')"
  con.query(SQLQuery,function (error) {
      if(error){
          console.log("Data insert fail");
      }
      else{
          console.log("Data insert success");
      }
  })
}



function DeleteDataByID(con) {
  let SQLQuery="DELETE FROM `students_list` WHERE `id`='2'";
  con.query(SQLQuery,function (error) {
      if(error){
          console.log("Data Delete fail");
      }
      else{
          console.log("Data Delete Success");
      }
  })
}


function UpdateData(con) {
  let SQLQuery="UPDATE `students_list` SET `roll`='10000000111' WHERE `id`='5'";
  con.query(SQLQuery,function (error) {
      if(error){
          console.log("Data Update fail");
      }
      else{
          console.log("Data Update Success");
      }
  })
}


function SelectData(con) {
  let SQLQuery="SELECT * FROM `students_list`";
  con.query(SQLQuery,function (error,result) {

      if(error){
          console.log("Data Select Fail")
      }
      else {
          console.log(result)

      }

  })
}


