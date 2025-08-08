import { useEffect } from "react";
import { useGetData } from "../services/form.service";

const DataPage = () => {
  const { data, getData } = useGetData();
  useEffect(() => {
    getData("http://localhost:2000/students");
  }, [getData]);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Kamar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nama}</td>
              <td>{item.kelas}</td>
              <td>{item.kamar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
