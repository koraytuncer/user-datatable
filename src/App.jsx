import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DataTable from './views/DataTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <DataTable />
      </Container>
      <ToastContainer />
    </>
  )
}

export default App