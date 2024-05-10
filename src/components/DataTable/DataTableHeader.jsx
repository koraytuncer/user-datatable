import {TableHead,TableRow,TableCell,Checkbox} from "@mui/material";
import "../../styles/datatable/DataTableHeader.css";

const DataTableHeader = () => {
    const headerItems = [
        { label: "Avatar", width: '50px' },
        { label: "Name", width: '250px' },
        { label: "Username", width: '250px' },
        { label: "Email", width: '250px' },
        { label: "Role", width: '150px' },
        { label: "Action", width: 'auto' }
      ];
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox className="checkBox" />
          </TableCell>
          {headerItems.map(({ label, width }) => (
            <TableCell key={label} align="left" sx={{ width: width }}>
              {label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default DataTableHeader;
