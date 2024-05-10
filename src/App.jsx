import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DataTable from './views/DataTable';



const App = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <DataTable />
      </Container>
    </>
  )
}

export default App