import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });
  const [show, setShow] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />

        <Button onClick={() => setShow((show) => !show)}>Add new cabin</Button>
        {show && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
