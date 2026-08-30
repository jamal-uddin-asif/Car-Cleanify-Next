import React from "react";

const getServices = async () => {
  const res = await fetch(
    "https://car-washing-system-cleanify-server.vercel.app/api/v1/services",
  );
  const data =await res.json();
  return data.data
};
const servicesPage =async () => {
    const services = await getServices()
    console.log(services)
  return <div>Services page here</div>;
};

export default servicesPage;
