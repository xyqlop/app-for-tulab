const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h1>Ini Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Kamar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bujang</td>
            <td>IV</td>
            <td>Kabir</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
