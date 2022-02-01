import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

const VehiclesTable = () => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>

            <th>Vehicle Type</th>
            <th>License Plate</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default VehiclesTable;
