// import PropTypes from 'prop-types';
import { Container, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const onChangeFilter = evt => {
    // console.log(evt.target.value);
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Container>
      <FilterLabel>
        Find contact by name
        <FilterInput type="text" onChange={onChangeFilter} />
      </FilterLabel>
    </Container>
  );
}

// Filter.propTypes = {
//   onChangeFilter: PropTypes.func.isRequired,
// };
