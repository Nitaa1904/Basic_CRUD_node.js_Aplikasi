// 1. Config awal
const fs = require("fs");
const express = require("express"); // atau const http = require("http"); jika menggunakan http

// 2. deklarasi express di app
const app = express();
const port = 3000;

const { Product } = require("./models");
//middleware untuk membaca json dari request body
app.use(express.json());

// 4. routing
// default url (health-check)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running good..",
  });
});
// kalau HTTP module kan if(req.url == /"nita") {}
app.get("/nita", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Ping Successfully !",
  });
});

///api.v1/(collection nya ) => collection nya ini harus JAMAK (s)
const cars = JSON.parse(
  fs.readFileSync(`${__dirname}/assets/data/cars.json`, "utf-8")
);

app.get("/api/v1/cars", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Success get cars data",
    isSuccess: true,
    totalData: cars.length,
    data: {
      cars,
    },
  });
});

app.post("/api/v1/cars", (req, res) => {
  //insert into...

  const newCar = req.body;
  cars.push(newCar);

  fs.writeFile(
    `${__dirname}/assets/data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(201).json({
        status: "Success",
        message: "Success add new car data",
        isSuccess: true,
        data: {
          car: newCar,
        },
      });
    }
  );
});

app.get("/api/v1/cars/:id", (req, res) => {
  //select * from fsw2 where id="1" or NAME = "Irpan"
  const id = req.params.id * 1;
  console.log(id);

  const car = cars.find((i) => i.id === id);

  //salah satu basic error handling
  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: `Failed get car data this id : ${id}`,
      isSuccess: false,
      data: null,
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Success get car data by id",
    isSuccess: true,
    data: {
      car,
    },
  });
});

// Mengupdate data tertentu
app.patch("/api/v1/cars/:id", (req, res) => {
  //UPDATE ... FROM =(table) WHERE id=req.param.id
  const id = req.params.id * 1;

  console.log(req.body.name);
  console.log(req.body.year);
  console.log(req.body.type);

  // object destructuring
  const { name, year, type } = req.body;

  //mencari data by id
  const car = cars.find((i) => i.id === id);
  console.log(car);

  //mencari data index
  const carIndex = cars.findIndex((i) => i.id === id);
  // console.log(carIndex);

  //update sesuai request bodynya (client/frontend)
  //object assign = menggunakan objek spread operator
  cars[carIndex] = { ...cars[carIndex], ...req.body };

  //get new data for response API | sesuai kebutuhan ga harus
  const newCar = cars.find((i) => i.id === id);

  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: "API not exist!!",
    });
  }
  //MASUKIN/ REWRITE DATA JSON dalam file
  fs.writeFile(
    `${__dirname}/assets/data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(201).json({
        status: "Success",
        message: `Success update car data by id: ${id}`,
        isSuccess: true,
        data: {
          newCar,
        },
      });
    }
  );
});

app.delete("/api/v1/cars/:id", (req, res) => {
  const id = req.params.id;

  //mencari data by id
  const car = cars.find((i) => i.id === id);
  //mencari index
  const carIndex = cars.findIndex((i) => i.id === id);

  //melakukan penghapusan data sesuai index nya = req.params.id
  cars.splice(carIndex, 1);
  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: `Failed to delete car data this id: ${id}`,
      isSuccess: false,
    });
  }

  fs.writeFile(
    `${__dirname}/assets/data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(201).json({
        status: "Success",
        message: `Success delete car data by id: ${id}`,
        isSuccess: true,
        data: null,
      });
    }
  );
});

// 5. Middleware
//middleware / handler untuk url yang tidak dapat diakses karena memang tidak ada di aplikasi
// membuat middleware = our own middleware
app.use((req, res, next) => {
  res.status(404).json({
    status: "Failed",
    Message: "API not exist !!",
  });
});

// 3. panggil method express
app.listen("3000", () => {
  console.log("start aplikasi di port 3000");
});
