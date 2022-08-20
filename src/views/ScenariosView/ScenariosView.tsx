import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Check from '@mui/icons-material/Check';
import Clear from '@mui/icons-material/Clear';

import { iScenario } from '../../types/scenario';
import { format } from 'date-fns';
import { AddCardButton, AddCardField } from './ScenariosView.elements';

export interface ScenariosProps {
    scenarios: iScenario[];
    actionScenarioAdd: (scenarioName: string) => void;
}

export default function ScenariosView({ scenarios, actionScenarioAdd }: ScenariosProps) {
  const [isAdding, setIsAdding] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const addScenarioName = () => {
    if (inputRef?.current?.value) {
      actionScenarioAdd(inputRef?.current?.value);
    }
    setIsAdding(false);
  };

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
        isAdding ? 
        <Grid item xs={2} sm={4} md={4}>
          <Card>
            <AddCardField>
              <TextField inputRef={inputRef} id="new-name" label="Scenario name" variant="outlined" sx={{ mr: 1}} />
              <IconButton aria-label="delete" size="small" onClick={addScenarioName}>
                <Check fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="small" onClick={()=>setIsAdding(false)}>
                <Clear fontSize="inherit" />
              </IconButton>
            </AddCardField>
          </Card>
        </Grid>
        : 
        <Grid item xs={2} sm={4} md={4}>
          <Card>
            <AddCardButton onClick={()=>setIsAdding(true)}>
              <CardContent>
                <AddCircleOutline />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  New Scenario
                </Typography>
              </CardContent>
            </AddCardButton>
          </Card>
        </Grid>
      }
      
      {scenarios.map((scenarioItem: iScenario, index: number) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card sx={{minHeight: 120}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {scenarioItem.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Created: {format(new Date(scenarioItem.created), 'dd/MM/yyyy')}
              </Typography>
              <Typography variant="body2">
                {scenarioItem.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      
  );
}
