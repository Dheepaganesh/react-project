import React, { useState } from "react";
import { Select, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const FilterComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSingleOption, setSelectedSingleOption] = useState(null);

  const handleSelectChange = (values) => {
    setSelectedOptions(values);
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
    <div>
      <Select
        mode="multiple"
        value={selectedOptions}
        onChange={handleSelectChange}
        style={{ width: "200px" }}
        placeholder="Select options"
      >
        <Option value="India">India</Option>
        <Option value="Pakistan">Pakistan</Option>
        <Option value="Banglore">Banglore</Option>
        {/* ... other dropdown options */}
      </Select>

      <div style={{ marginTop: "10px" }}>
        {selectedOptions.map((option) => (
          <Tag
            key={option}
            closable
            onClose={() => handleRemoveOption(option)}
            style={{ marginBottom: "5px" }}
          >
            {option}
          </Tag>
        ))}
      </div>

      <Select
        value={selectedSingleOption}
        onChange={handleSingleOptionChange}
        style={{ width: "200px", marginTop: "20px" }}
        placeholder="Select a single option"
      >
        <Option value="Option1">Option 1</Option>
        <Option value="Option2">Option 2</Option>
        <Option value="Option3">Option 3</Option>
        {/* ... other dropdown options */}
      </Select>

      {selectedSingleOption && (
        <div style={{ marginTop: "10px" }}>
          <Tag
            closable
            onClose={handleRemoveSingleOption}
            style={{ marginBottom: "5px" }}
          >
            {selectedSingleOption}
          </Tag>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
