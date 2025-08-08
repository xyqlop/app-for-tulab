import { FormProvider, useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import { useAddData } from "../services/form.service";
import { Bounce, ToastContainer, toast } from "react-toastify";

type InputType = {
  nama: string;
  kelas: string;
  kamar: string;
};

const AddDataPage = () => {
  const methods = useForm();
  const { addData } = useAddData();

  const onSubmit = async (data: InputType) => {
    console.log("executed");
    if (!data.nama || !data.kelas || !data.kamar) {
      toast.error("Kolom input tidak boleh kosong!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    await addData("http://localhost:2000/students", data);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <FormProvider {...methods}>
        <div className="bg-secondary min-w-9/10 border border-neutral-600 rounded-md text-light dark:bg-primary sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/4 pt-5 pb-10 px-3">
          <h1 className="text-2xl font-bold mb-7 lg:text-3xl">Tambah Data</h1>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <InputForm label="nama" type="text" placeholder="john doe" />
              <InputForm label="kelas" type="text" placeholder="kelas" />
              <InputForm label="kamar" type="text" placeholder="kamar" />
            </div>
            <button
              type="submit"
              className="font-bold bg-[#6096ff] dark:bg-[#1c2b50] text-[#f5f5f5] py-2 px-3 border border-dark/30 dark:border-light rounded cursor-pointer active:translate-y-1 mt-8 w-full click-effect"
            >
              Submit
            </button>
          </form>
        </div>
      </FormProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default AddDataPage;
