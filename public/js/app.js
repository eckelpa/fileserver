'use strict';

$(document).ready( function () {
    $('#browser').dataTable( {
        ajax: {
            url: '/files',
            dataSrc: ''
        },
        columns: [
            {"data": null, render: function(data, type, full, meta) {
                return "<a href='."+data.path+"'>"+data.name+"</a>";
            }},
            {"data": "filesize"}
            ]
    });
});

