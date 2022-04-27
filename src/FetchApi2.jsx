import React, { useState, useEffect } from "react";

function FetchApi2() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODdiNWY4NjIyNGFlZjMwYjc2OGViNTYwOGM4ZWUwMzVmYTA2MWI0NmQ2YzAzNDhiOTQ3ODQ4YjMwNmM4MzU1ODI3MmFmMzY5NDIxZWYzN2QiLCJpYXQiOjE2MjUyMzIyMzIsIm5iZiI6MTYyNTIzMjIzMiwiZXhwIjoxNjU2NzY4MjMyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.cLpzYEBXLwcGk_G_9LOFqSDhSrWfoVB5JuGAkVwZJPy6Y2yxrue34aLsfNmW_62LMJWJ7iPaebNVNcz57KM48l9yJDFN0Mdx_detubp9qvr-iE4BXwMCLgWFTuzD-E0JvZnUu9UKIkkb2dJn5-Q2ZQqO9j8rlZH-9iWQR9ECcS30ZFdds3PVj5oH6tjJ8x0vGcq5L7GT5MESNY0pHpl7QknDwU6H8UERe-ChR7DQS_o5uQbJLgyqA3vEovjof5a23V-0rF5YAxSR_lRjVeqVJU0f81wNF7tW4AHzCLH4J9DkLXDb-whNk4BGvgn3K3PA5Nb_aqaQPECY0XTwP0o6rkqiBBJr7RQ8w-pBOoENqa7GSU5wFnYL9OtYV87Bq9wk4jceoGs_tYkfbgoL9cEoNxUyUZFH3heBJ3a43to2H3ET4oWXGmiWG7QVDfaepK0awGxyfnd3nkxCE8zXVQAP8tszIZY9OQ20tqQJfMbctYucG16Fu3xFTNqmy7aTrGy_NZmexithjjDzzrFPlncMdban6ICKQZBjejn68AZ9ELYJZyz1gcF8TLODahkBFFMa0Az3idySiDsesqf-VZxF4cM2Z261YGMnfx-qj7I2E_L6O4Uv-16XYol3U89R6uZH5n7ypyZ1cl6_QXYNFPkr0ERMnCyNehhORiv2O8rhfz8",
      },
    };
    fetch("http://apit.bluerickshaw.com/api/getUsersByStatus", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        // console.log(res);
        setItems(json.data);
        setIsLoading(true);
      });
    // console.log(items);
  });
  return (
    <>
      {!isLoading ? (
        <div>Loading .....</div>
      ) : (
        <div className="FetchApi">
          Data Loaded Successfully !
          <ul>
            {items.map((item) => (
              <li key={item.id}> EMAIL : {item.email}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default FetchApi2;
