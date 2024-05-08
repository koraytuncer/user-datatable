import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DataTable from './views/DataTable';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <DataTable />
      </Container>
    </React.Fragment>
  )
}

export default App