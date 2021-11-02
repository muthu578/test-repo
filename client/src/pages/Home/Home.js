import React from "react";
import { Button, DatePicker } from "antd";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <section className='home'>
        <h1> Home </h1>
        <Button type='primary'>PRESS ME</Button>
        <DatePicker placeholder='select date' />
      </section>
    </>
  );
}
