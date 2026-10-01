import { useLocation } from "react-router-dom";
import { Table } from "../components";

export default function TablePage() {
  const location = useLocation();
  const tableData = location.state?.apiData || [];

  return (
    <main>
      <Table data={tableData} rowsLength={tableData.length} />
    </main>
  );
}
