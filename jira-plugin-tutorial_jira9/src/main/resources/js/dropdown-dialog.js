AJS.$(document).ready(function() {
    AJS.$('#add-option-btn').click(function() {
        AJS.dialog2('#my-dialog').show();
    });

    AJS.$('#cancel-btn').click(function() {
        AJS.dialog2('#my-dialog').hide();
    });

    AJS.$('#save-btn').click(function() {
        var customText = AJS.$('#custom-field-name').val();

        if (!customText) {
            alert("Пожалуйста, заполните текстовое поле.");
            return;
        }

        AJS.$.ajax({
            url: AJS.contextPath() + "/secure/admin/tutorial/saveOption",  // Убедитесь, что URL правильный
            type: 'POST',
            data: {
                option: customText
            },
            success: function(response) {
                // Если опция добавлена успешно, показываем сообщение
                AJS.messages.success({
                    message: 'Опция успешно добавлена!',
                    closeable: true
                });

                var dropdown = AJS.$('#dropdown');
                if (dropdown.length > 0) {
                    var existingOptions = dropdown.find('option').map(function() {
                        return AJS.$(this).val();
                    }).get();

                    if (existingOptions.indexOf(customText) === -1) {
                        dropdown.append('<option value="' + customText + '">' + customText + '</option>');
                    } else {
                        alert("Эта опция уже существует в списке.");
                    }
                }

                AJS.dialog2('#my-dialog').hide();
            },
            error: function(xhr, status, error) {
                console.error('Ошибка при добавлении опции:', error);
                alert("Ошибка при сохранении опции.");
            }
        });
    });
});
