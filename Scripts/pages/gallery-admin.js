Dropzone.autoDiscover = false;

$(function () {
    var myDropzone = new Dropzone("#images", {
        uploadMultiple: true,
        acceptedFiles: 'image/*',
        autoProcessQueue: false,
        addRemoveLinks: true,
        parallelUploads: 1,
        maxFilesize: 4,
        dictDefaultMessage: "Перенесіть файли сюди",
        dictInvalidFileType: "Таки файл не дозволено завантажувати",
        dictResponseError: "Завантаження невдале",
        dictCancelUpload: "Не завантажувати",
        dictCancelUploadConfirmation: "Ви впевнені?",
        dictRemoveFile: "Видалити файл",
        dictMaxFilesExceeded: "Надто багато файлів"

    });
    myDropzone.on('queuecomplete', function () {
        location.reload();
    });
    myDropzone.on('addedfile', function () {
        $('#doUpload').removeClass('disabled');
        $('#doUpload').click(function () {
            myDropzone.options.autoProcessQueue = true;
            myDropzone.processQueue();
        });
    });


    $('.remove').click(function() {
        var name = $(this).data('name');

        $.ajax({
                method: 'GET',
                url: removeUrl,
                data: { name: name }
            })
            .success(function() {
                location.reload();
            });
    });
});

