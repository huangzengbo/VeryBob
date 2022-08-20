import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export interface SearchProps {
    actionSearchChange: (keyword: string) => void;
}

export default function SearchView({ actionSearchChange }: SearchProps) {

  return (
    <Box sx={{ p: 4, pr: 0 }}>
      <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => actionSearchChange(e.target.value)} />
    </Box>
  );
}
