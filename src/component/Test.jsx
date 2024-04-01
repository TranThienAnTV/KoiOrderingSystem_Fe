import { useState } from "react";
import useCallApi from "../assets/hook/useCallApi";
import { alertFail } from "../assets/hook/useNotification";
import {
  getCurrentDateTime,
  getCurrentDateTimeVietnam,
  getDifTimeVietnam,
} from "../assets/hook/useGetTime";

const Test = () => {
  const { loading, error, data, callApi } = useCallApi();
  const [requestData, setRequestData] = useState({});

  if (error) {
    alertFail(error);
  }

  const handleGetData = () => {
    callApi("GET", "/artworks");
  };

  const getDetail = () => {
    callApi("GET", "/artwork-detail/13");
  };

  const handlePostData = () => {
    let requestData = {
      userName: "Testttt213123",
      password: "Test213213ttt",
      name: "Testttt",
      email: "hthinh359@gmail.com",
      role: "audience",
    };
    callApi("POST", "signup", requestData);
  };

  console.log(data);

  // Xử lý dữ liệu, lỗi và tải trang tương ứng với trạng thái của hook
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <button onClick={handleGetData}>Get Data</button>
      <button onClick={getDetail}>Get Detail</button>
      <button onClick={handlePostData}>Post Data</button> */}
      {/* {data &&
        data.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.title}, <strong>description:</strong>{" "}
            {item.description}
          </li>
        ))} */}
      {/* <input type="file" onChange={(e) => console.log(e.target.value)} />

      {data && data.description} */}
    </div>
  );
};

export default Test;
