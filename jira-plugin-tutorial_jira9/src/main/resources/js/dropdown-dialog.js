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

        if (!selectedOption || !customText) {
            alert("Пожалуйста, выберите опцию и заполните текстовое поле.");
            return;
        }

        AJS.messages.success({
            message: 'Данные успешно сохранены!',
            closeable: true
        });

        AJS.dialog2('#my-dialog').hide();
    });
});
