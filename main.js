$(document).ready(function () {
    const dropArea = $('#drop-area');

    dropArea.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    })
        .on('dragover dragenter', function () {
            dropArea.addClass('highlight');
        })
        .on('dragleave dragend drop', function () {
            dropArea.removeClass('highlight');
        })
        .on('drop', function (e) {

            let files = e.originalEvent.dataTransfer.files;

            console.log(files.length);

            for (let i = 0; i < files.length; i++) {
                // TODO
                // Send Files using Ajax or post to server
                console.log(files[i]);
            }

        });
});