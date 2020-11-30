

$(function () {
    $(".header").load("header.html")
    $(".main").load("home.html")
    $(".footer").load("footer.html")
});

function clickNavHome() {
    $(".main").load("Home.html");
}

function clickNavList() {
    $(".main").load("ListFriend.html");
    builTable();
}

var listFriend = [];
var counter = 0

function ListFriend(name, address, city, pincode, age) {
    this.id = ++counter;
    this.name = name;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.age = age;

}

function initListFriend() {
    if (null == listFriend || listFriend == 0) {
        listFriend.push(new ListFriend("Nguyễn Đức Mạnh","Sài Đồng", "Hà Nội", "Administration", "21"));
        listFriend.push(new ListFriend("Đàm Phương Uyên","Sài Đồng", "Hà Nội", "User", "19"));
        listFriend.push(new ListFriend("Trần Lan Anh","Ngọc Lâm", "Hà Nội", "User", "20"));
        listFriend.push(new ListFriend("Ngô Hải Ninh","Sài Đồng", "Hà Nội", "User", "21"));
        listFriend.push(new ListFriend("Nguyễn Trọng Nghĩa","Sài Đồng", "Hà Nội", "User", "21"));
    }
}

function builTable() {
    setTimeout(function name(params) {
        $('tbody').empty();
        initListFriend();
        listFriend.forEach(function (item) {
            console.log(item);
            $('tbody').append(
                '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.address + '</td>' +
                '<td>' + item.city + '</td>' +
                '<td>' + item.pincode + '</td>' +
                '<td>' + item.age + '</td>' +
                '<td>' + 
                '<a  class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>' +
                '<a  class="edit" title="Edit" data-toggle="tooltip" onclick="openUpdateModal(' + item.id + ')"><i class="material-icons">&#xE254;</i></a>' +
                '<a  class="delete" title="Delete" data-toggle="tooltip" onclick="openDelete(' + item.id + ')"><i class="material-icons">&#xE872;</i></a>' +
                '</td>' +
                '</tr>');
        });

    }, 500);
}

function openAddModal() {
    resetForm()
    openModal();
}

function resetForm(){
    document.getElementById("id").value= "";
    document.getElementById("name").value= "";
    document.getElementById("address").value= "";
    document.getElementById("city").value= "";
    document.getElementById("pincode").value= "";
    document.getElementById("age").value= "";

}

function openModal() {
    $('#myModal').modal('show');
}

function hideModal () {
    $('#myModal').modal('hide');
}

function AddListFriend() {
    var name = document.getElementById("name").value;
    var add = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pcode = document.getElementById("pincode").value;
    var age = document.getElementById("age").value;

    listFriend.push(new ListFriend(name,add,city,pcode,age));

    hideModal();
    showSuccessAlert();
    builTable();
}

function openUpdateModal(id){
 
    var index = listFriend.findIndex(x => x.id ==id);
    document.getElementById("id").value = listFriend[index].id;
    document.getElementById("name").value = listFriend[index].name;
    document.getElementById("address").value = listFriend[index].address;
    document.getElementById("city").value = listFriend[index].city;
    document.getElementById("pincode").value = listFriend[index].pincode;
    document.getElementById("age").value = listFriend[index].age;

    openModal();
}

function save(){
    var id = document.getElementById("id").value;

    if(id == null|| id==""){
        AddListFriend();
    }else{
        updateFriend()   
    }}

function updateFriend(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var add = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pcode = document.getElementById("pincode").value;
    var age = document.getElementById("age").value;

    var index = listFriend.findIndex(x => x.id ==id);

    listFriend[index].name= name;
    listFriend[index].address= address;
    listFriend[index].city= city;
    listFriend[index].pcode= pcode;
    listFriend[index].age= age;

    hideModal();
    showSuccessAlert();
    builTable();
}
    function openDelete(id) {
      
        var index = listFriend.findIndex(x => x.id == id);
        var name = listFriend[index].name;
    
        var result = confirm("Want to delete " + name + "?");
        if (result) {
            deletelistFriend(id);
        }
    }
    
    function deletelistFriend(id) {
        // TODO validate
        var index = listFriend.findIndex(x => x.id == id);
        listFriend.splice(index, 1);
    
        showSuccessAlert();
        builTable();
    }
    

function showSuccessAlert() {
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
        $("#success-alert").slideUp(500);
    });
}
