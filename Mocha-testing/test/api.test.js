let chai = require("chai");
let chaiHttp = require("chai-http");
let expect = chai.expect;
chai.use(chaiHttp);

describe("Testing my rest api ", () => {
  it("Should return results status code as 200 for /", function (done) {
    chai
      .request("http://localhost:5500")
      .get("/")
      .then(function (res) {
        expect(res).to.have.status(200);
        done();
      })
      .catch(function (err) {
        throw err;
      });
  });

  it("Should return results status code as 200 for /movies", function (done) {
    chai
      .request("http://localhost:5500")
      .get("/movies")
      .then(function (res) {
        expect(res).to.have.status(200);
        done();
      })
      .catch(function (err) {
        throw err;
      });
  });

  it("Should return results status code as 200 for /readText", function (done) {
    chai
      .request("http://localhost:5500")
      .get("/readText")
      .then(function (res) {
        expect(res).to.have.status(200);
        done();
      })
      .catch(function (err) {
        throw err;
      });
  });
  //false case
  it("Should return results status code as 404 for /readText", function (done) {
    chai
      .request("http://localhost:5500")
      .get("/readText")
      .then(function (res) {
        expect(res).to.have.status(404);
        done();
      })
      .catch(function (err) {
        throw err;
      });
  });
});
