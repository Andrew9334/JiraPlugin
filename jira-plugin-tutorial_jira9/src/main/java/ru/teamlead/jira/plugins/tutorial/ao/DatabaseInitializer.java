package ru.teamlead.jira.plugins.tutorial.ao;

import com.atlassian.activeobjects.external.ActiveObjects;

public class DatabaseInitializer {

    private final DropdownOptionService dropdownOptionService;

    public DatabaseInitializer(ActiveObjects activeObjects) {
        if (activeObjects == null) {
            throw new IllegalArgumentException("ActiveObjects cannot be null");
        }

        this.dropdownOptionService = new DropdownOptionService(activeObjects);
    }

    public void initialize() {
        if (dropdownOptionService.getAllOptions().isEmpty()) {
            dropdownOptionService.createOption("Option 1");
            dropdownOptionService.createOption("Option 2");
            dropdownOptionService.createOption("Option 3");
        }
    }
}