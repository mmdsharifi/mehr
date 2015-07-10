var Mange=new Object();
Mange.fileUpload=function(inputId,maxsize,maxCount){
    
    $("#"+inputId).fileinput({
        maxCount:maxCount,
        showUpload: false,
        previewFileType: "image",
        browseClass: "btn btn-success btn-md",
        captionClass:"input-sm",
        browseLabel: "انتخاب",
        browseIcon: '<i class="fa fa-picture-o"></i>',
        removeClass: "btn  btn-danger btn-md",
        removeLabel: "حذف",
        maxFileSize: maxsize,
        removeIcon: '<i class="fa fa-trash"></i>',
        uploadClass: "btn btn-success",
        uploadLabel: "ارسال به سرور",
        allowedFileExtensions: ['jpg', 'gif', 'png', 'jpeg'],
        msgInvalidFileType: "از تصاویر فقط استفاده کنید",
        msgInvalidFileExtension: "از فایل های مجاز استفاده کنید[jpg,jpeg,png,gif]",
        msgSizeTooLarge: "حجم تصاویر انتخاب شده غیر مجاز است",
        uploadIcon: '<i class="fa fa-upload"></i>',
        layoutTemplates: {
        main1: "{preview}\n" +
        "<div class=\'input-group {class}\'>\n" +
        "   <div class=\'input-group-btn\'>\n" +
        "       {browse}\n" +
        "       {upload}\n" +
        "       {remove}\n" +
        "   </div>\n" +
        "   {caption}\n" +
        "</div>"
        }
    });
}