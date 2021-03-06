import React from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, FormGroup } from 'patternfly-react';
import TagSelector from './tagSelector';

const CategoryModifier = ({
  tagCategories, onTagCategoryChange, selectedTagCategory, categoryLabel,
}) => (
  <FormGroup>
    <Col xs={12} md={4} lg={6}>
      <ControlLabel>{categoryLabel}</ControlLabel>
    </Col>
    <Col xs={12} md={8} lg={6}>
      <TagSelector tagCategories={tagCategories} onTagCategoryChange={onTagCategoryChange} selectedOption={selectedTagCategory} />
    </Col>
  </FormGroup>
);

CategoryModifier.propTypes = {
  tagCategories: PropTypes.arrayOf(PropTypes.object),
  selectedTagCategory: PropTypes.object.isRequired,
  onTagCategoryChange: PropTypes.func.isRequired,
  categoryLabel: PropTypes.string,
};

CategoryModifier.defaultProps = {
  categoryLabel: 'Category',
};

export default CategoryModifier;
