
var staff = new Vue({
    el: '#STAFF',
    data:{
        STAFF_DESC: 'University Malaya Staff are able to view FAQ section and download the required document from CiTra',
    },
    delimiters: ["[[","]]"]
})

var student = new Vue({
    el: '#STUDENT',
    data:{
        STUDENT_DESC:'Student are able to check for class timetable that only related to CITRA subject and browse on the FAQ if you have any doubts in mind.'
    },
    delimiters: ["[[","]]"]
})
var student = new Vue({
    el: '#ADMIN',
    data:{
        ADMIN_DESC:'For authorised personnal only'
    },
    delimiters: ["[[","]]"]
})
