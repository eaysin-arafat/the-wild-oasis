import { Button, Heading, Row } from "../ui";
import { CabinsTable } from "../features/cabins/CabinsTable";
import { Fragment, useState } from "react";
import { CabinTableOperations } from "../features/cabins/CabinTableOperations";
import { AddCabin } from "../features/cabins/AddCabin";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

export const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinsTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>

        {showForm && <CreateCabinForm />}
        {/* <AddCabin /> */}
      </Row>
    </Fragment>
  );
};
