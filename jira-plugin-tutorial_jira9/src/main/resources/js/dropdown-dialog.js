AJS.$(document).ready(function() {
    AJS.$('#open-dialog-btn').click(function() {
        AJS.dialog2('#my-dialog').show();
    });

    AJS.$('#cancel-btn').click(function() {
        AJS.dialog2('#my-dialog').hide();
    });

    AJS.$('#save-btn').click(function() {
        var selectedOption = AJS.$('#dropdown').val();
        var customText = AJS.$('#custom-field').val();

        console.log('Выбрана опция: ' + selectedOption);
        console.log('Дополнительный текст: ' + customText);

        AJS.dialog2('#my-dialog').hide();
    });
});
