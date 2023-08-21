import React, { useState } from "react";
import { Select, Tag, Form, Input, Table, Button } from "antd";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "./store/action";
import {
  ListOption,
  MenuButtons,
  HierarchyOption,
  ToggleBoxStyle,
  InputStyle,
  LabelStyle,
  SelectStyle,
  FormStyle,
  ClearStyle,
  FormHeader,
  MainDiv,
  StyledTable,
  TaggleDiv,
  HeaderStyle,
  Directory,
  RoleStyle,
  HeaderOptions,
  HeaderMenu,
  HeaderInfo,
  MainMenuName,
  FilterStyle,
  Useroption,
  Subhead,
} from "./HomePageStyle";
import FilterSVG from "../svg/FilterSvg";
import { Link } from "react-router-dom";
import MenuSvg from "../svg/MenuSvg";
import SearchSVG from "../svg/SearchSvg";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Progress",
    dataIndex: "progress",
    key: "Progress",
  },
];

const data = [
  {
    key: "1",
    name: "Deepak",
    age: 22,
    address: "123 Main St, City",
    progress: "InActive",
  },
  {
    key: "2",
    name: "Kumar",
    age: 25,
    address: "456 Elm St, Town",
    progress: "Active",
  },
  {
    key: "3",
    name: "John",
    age: 35,
    address: "789 Oak St, Village",
    progress: "OnBoard",
  },
  {
    key: "4",
    name: "Ashok",
    age: 27,
    address: "215 Health Garden",
    progress: "InActive",
  },
];

const { Option } = Select;

const FilterComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSingleOption, setSelectedSingleOption] = useState(null);
  const [input, setInput] = useState("");

  const InputValue = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSelectChange = (values) => {
    setSelectedOptions(values);
  };

  const clearData = () => {
    setSelectedOptions([]);
    setSelectedSingleOption(null);
    setInput("");
  };

  const LogOut = () => {
    dispatch(Logout());
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((item) => item !== option)
    );
  };

  const handleSingleOptionChange = (value) => {
    if (value != "null") {
      setSelectedSingleOption(value);
    } else if (value === "null") {
      setSelectedSingleOption(null);
    }
  };

  const handleRemoveSingleOption = () => {
    setSelectedSingleOption(null);
  };

  return (
    <MainDiv>
      <HeaderStyle>
        <HeaderOptions>
          <MenuSvg />
          <HeaderMenu>
            <MainMenuName>Filter</MainMenuName>
            <Directory>Organization / Account / Hierarchy</Directory>
          </HeaderMenu>
        </HeaderOptions>

        <HeaderInfo>
          <RoleStyle class="ant-tag sc-bAeXDU lmwrjD">
            ORG - Academy Mortgage
          </RoleStyle>
          <Button type="default" onClick={LogOut}>
            Logout
          </Button>
        </HeaderInfo>
      </HeaderStyle>

      <Subhead>
        <ListOption>
          <HierarchyOption>Hierarchy</HierarchyOption>
          <Useroption>Users</Useroption>
        </ListOption>
        <MenuButtons>
          <Button type="default">Upload</Button>
          <Button type="default">Add New Tier</Button>
          <Button type="default">:</Button>
        </MenuButtons>
      </Subhead>
      <FormStyle>
        <FormHeader>
          <FilterStyle>
            <FilterSVG />
            <span>Filter</span>
          </FilterStyle>

          <ClearStyle
            onClick={clearData}
            id="filter_clear"
            data-cy="filter_clear"
            class="sc-edoZmE hyACfo"
          >
            Clear
          </ClearStyle>
        </FormHeader>
        <LabelStyle>Search</LabelStyle>
        <InputStyle
          id="input"
          placeholder="Search Name"
          value={input}
          onChange={handleInput}
        />
        <LabelStyle>Select Role</LabelStyle>
        <SelectStyle
          className="role"
          value={selectedSingleOption}
          onChange={handleSingleOptionChange}
          placeholder="Select Role"
        >
          <Option value="null">Select Role</Option>
          <Option value="User">User(Agent)</Option>
          <Option value="Listing Manager">Listing Manager</Option>
          <Option value="Tier Manager">Tier Manager</Option>
          <Option value="Account Manager">Account Manager</Option>
        </SelectStyle>
        <LabelStyle>Status</LabelStyle>
        <SelectStyle
          className="status"
          mode="multiple"
          value={selectedOptions}
          onChange={handleSelectChange}
          placeholder="Select options"
        >
          <Option value="Activated">Activated</Option>
          <Option value="Deactivated">Deactivated</Option>
          <Option value="Onboarding">Onboarding</Option>
        </SelectStyle>
      </FormStyle>

      <TaggleDiv>
        {selectedSingleOption && (
          <div>
            <ToggleBoxStyle closable onClose={handleRemoveSingleOption}>
              {selectedSingleOption}
            </ToggleBoxStyle>
          </div>
        )}
        {selectedOptions.map((option) => (
          <ToggleBoxStyle
            key={option}
            closable
            onClose={() => handleRemoveOption(option)}
          >
            {option}
          </ToggleBoxStyle>
        ))}
      </TaggleDiv>
      <StyledTable columns={columns} dataSource={data}></StyledTable>
    </MainDiv>
  );
};

export default FilterComponent;
