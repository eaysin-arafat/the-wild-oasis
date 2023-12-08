import { Heading, Row } from "../ui";
import { CabinsTable } from "../features/cabins/CabinsTable";
import { Fragment } from "react";
import { CabinTableOperations } from "../features/cabins/CabinTableOperations";
import { AddCabin } from "../features/cabins/AddCabin";

export const Cabins = () => {
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinsTable />
        <AddCabin />
      </Row>
    </Fragment>
  );
};
