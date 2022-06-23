// JavaScript source code

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th {
    background-color:blue;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
tr:hover {background-color: coral;
}
.borderless tr td {
	border:none !important;
	padding:8px !important;
}
.$(ajax({
	type:type of call,
	url:the address of the service to be call,
	data:any data to be transferred during a call, '' if no data transferred
	cache:false.
	success:function(datareceived){
		//instructions to execute when the ajax call is succeds
	},
	error.function(){
		//instructions to execute when the ajax call is failed
	}
}));
