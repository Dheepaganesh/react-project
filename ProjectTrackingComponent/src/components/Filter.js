import React, { useState } from "react";
import { Select, Tag, Form, Input, Table, Button } from "antd";
import { styled } from "styled-components";
import {
  LinkStyle,
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
} from "./HomePageStyle";
import FilterSVG from "../svg/FilterSvg";
import { Link } from "react-router-dom";

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
];

const data = [
  {
    key: "1",
    name: "Deepak",
    age: 22,
    address: "123 Main St, City",
  },
  {
    key: "2",
    name: "Kumar",
    age: 25,
    address: "456 Elm St, Town",
  },
  {
    key: "3",
    name: "John",
    age: 35,
    address: "789 Oak St, Village",
  },
  {
    key: "4",
    name: "Ashok",
    age: 27,
    address: "215 Health Garden",
  },
];

const { Option } = Select;

const FilterComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSingleOption, setSelectedSingleOption] = useState(null);

  const handleSelectChange = (values) => {
    setSelectedOptions(values);
  };

  const clearData = () => {
    setSelectedOptions([]);
    setSelectedSingleOption(null);
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((item) => item !== option)
    );
  };

  const handleSingleOptionChange = (value) => {
    setSelectedSingleOption(value);
  };

  const handleRemoveSingleOption = () => {
    setSelectedSingleOption(null);
  };

  return (
    <MainDiv>
      <HeaderStyle>
        <LinkStyle to="/">Go Back Home</LinkStyle>
        <div>About</div>
      </HeaderStyle>
      <FormStyle>
        <FormHeader>
          <div>
            <FilterSVG />
            <span>Filter</span>
          </div>

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
        <InputStyle placeholder="Search Name" />
        <LabelStyle>Select Role</LabelStyle>
        <SelectStyle
          value={selectedSingleOption}
          onChange={handleSingleOptionChange}
          placeholder="Select a single option"
        >
          <Option value="User">User(Agent)</Option>
          <Option value="Listing Manager">Listing Manager</Option>
          <Option value="Tier Manager">Tier Manager</Option>
          <Option value="Account Manager">Account Manager</Option>
        </SelectStyle>
        <LabelStyle>Status</LabelStyle>
        <SelectStyle
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
            <ToggleBoxStyle
              closable
              onClose={handleRemoveSingleOption}
              style={{ marginBottom: "5px" }}
            >
              {selectedSingleOption}
            </ToggleBoxStyle>
          </div>
        )}
        {selectedOptions.map((option) => (
          <ToggleBoxStyle
            key={option}
            closable
            onClose={() => handleRemoveOption(option)}
            style={{ marginBottom: "5px" }}
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
