import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { iSort } from '../../types/sort';

export interface SortProps {
    sort: iSort;
    allSorts: string[];
    actionChangeSort: (sort: iSort) => void;
}

export default function SortView({ sort, allSorts, actionChangeSort }: SortProps) {
  const [selected, setSelected] = React.useState(true);

  const handleChange = (event: SelectChangeEvent) => {
    actionChangeSort({
      sortBy: event.target.value,
      isAesc: false,
    } as iSort);
    setSelected(false);
  }
  return (
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item>
            <FormControl variant="filled" sx={{ minWidth: 120 }}>
              <InputLabel id="sort-select">Sort by</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                value={sort.sortBy}
                label="Sort by"
                onChange={handleChange}
              >
                {allSorts.map((sortItem: string, index: number) => <MenuItem key={index} value={sortItem}>{sortItem}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <ToggleButton
              size="large"
              value="check"
              selected={sort.isAesc}
              onChange={() => {
                actionChangeSort({
                  sortBy: sort.sortBy,
                  isAesc: !selected,
                } as iSort);
                setSelected(!selected);
              }}
              >
              {selected ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </ToggleButton>
          </Grid>
        </Grid>
  );
}
