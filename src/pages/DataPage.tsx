import { useEffect } from "react";
import { useGetData } from "../services/form.service";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const DataPage = () => {
  const { data, getData } = useGetData();
  useEffect(() => {
    getData("http://10.113.32.249:2000/students");
  }, [getData]);

  // useEffect(() => {
  //   data.forEach((item) => console.log(item.nama.length));
  // }, [data]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {data.length === 0 ? (
        <NoDataInfo />
      ) : (
        <table>
          <caption className="caption-bottom font-extralight text-sm mt-3">
            *Klik untuk nama untuk melihat detail!
          </caption>
          <thead>
            <tr className="text-xs lg:text-base">
              <th className="w-1/12">No</th>
              <th className="w-1/2">Nama</th>
              <th className="w-1/5">Kelas</th>
              <th className="w-1/4">Kamar</th>
              <th className="w-1/12" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="text-xs lg:text-base truncate">
                <td className="capitalize text-center">{index + 1}</td>
                <td className="capitalize">{item.nama}</td>
                <td className="capitalize">{item.kelas}</td>
                <td className="capitalize">{item.kamar}</td>
                <td className="space-x-1 text-center">
                  <PencilSquareIcon className="size-4 lg:size-6 text-dark/40 hover:text-dark dark:text-light/50 dark:hover:text-light hover:scale-120 transition-transform inline-block" />
                </td>
                <td>
                  <TrashIcon className="size-4 lg:size-6 text-red-500/60 hover:text-[#7b151a] dark:text-[#7b151a] hover:scale-120 dark:hover:text-red-500 transition-transform inline-block" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const NoDataInfo: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-5xl lg:text-7xl font-bold">Maaf....</h1>
      <p className="text-2xl lg:text-3xl font-semibold">Data tidak ditemukan</p>
    </div>
  );
};

export default DataPage;
