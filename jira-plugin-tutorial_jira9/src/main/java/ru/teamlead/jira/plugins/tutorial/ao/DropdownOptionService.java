package ru.teamlead.jira.plugins.tutorial.ao;

import com.atlassian.activeobjects.external.ActiveObjects;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class DropdownOptionService {

    private final ActiveObjects activeObjects;

    public DropdownOptionService(ActiveObjects activeObjects) {
        this.activeObjects = activeObjects;
    }

    public void createOption(String option) {
        if (option == null || option.isEmpty()) {
            throw new IllegalArgumentException("Option cannot be null or empty");
        }

        DropdownOption dropdownOption = activeObjects.create(DropdownOption.class);
        dropdownOption.setOption(option);
        dropdownOption.save();
    }

    public List<String> getAllOptions() {
        DropdownOption[] options = activeObjects.find(DropdownOption.class);
        return options != null ?
                Arrays.stream(options).map(DropdownOption::getOption).collect(Collectors.toList()) :
                Collections.emptyList();
    }
}
