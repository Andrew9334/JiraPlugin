package ru.teamlead.jira.plugins.tutorial.action;


import com.atlassian.jira.web.action.JiraWebActionSupport;
import ru.teamlead.jira.plugins.tutorial.ao.DropdownOptionService;

import java.util.Collections;
import java.util.List;

public class DropdownPanelAction extends JiraWebActionSupport {

    private final DropdownOptionService dropdownOptionService;
    private List<String> options;

    public DropdownPanelAction(DropdownOptionService dropdownOptionService) {
        this.dropdownOptionService = dropdownOptionService;
    }

    @Override
    public String execute() throws Exception {
        options = dropdownOptionService.getAllOptions();
        return "success";
    }

    public List<String> getOptions() {
        return options != null ? options : Collections.emptyList();
    }
}
