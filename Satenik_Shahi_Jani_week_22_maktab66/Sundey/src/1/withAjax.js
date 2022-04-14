import { useEffect, useState } from "react";
import axios from "axios";

const higherOrederComponent = (Component, entity) => {
  return function WithAjax({ ...props }) {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get("https://60aa037466f1d000177724a1.mockapi.io/dashboard/" + entity)
        .then((res) => setData(res.data))
        .catch((cth) => setErr(cth))
        .finally(() => setLoading(false));
    }, []);

    const deleteRow = (id,callback) => {
      
      axios.delete(`https://60aa037466f1d000177724a1.mockapi.io/dashboard/customers/${id}`)
      .then(() => setData(data.filter(item => item.id !== id)))
      .catch((cth) => setErr(cth))
      .finally(() => callback());
    }

    return <Component err={err} data={data} loading={loading} deleteRow={deleteRow} {...props} />;
  };
};
export default higherOrederComponent;
