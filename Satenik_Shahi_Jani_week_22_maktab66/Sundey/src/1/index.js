import higherOrederComponent from "./withAjax";
function Practice1({ data, loading, err }) {
  console.log(data);
  if (err) return <p> {err.message} </p>;
  if (loading) return <h2>loading... </h2>;
  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>
          {item.name} - {item.count}
        </li>
      ))}
    </ul>
  );
}
export default higherOrederComponent(Practice1, "products");
