package ru.teamlead.jira.plugins.tutorial.ao;

import net.java.ao.Entity;

public interface DropdownOption  extends Entity {

    String getOption();

    void setOption(String value);
}
