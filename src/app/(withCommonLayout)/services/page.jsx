import React from "react";
import ServiceCard from "./_components/ServiceCard";
import Container from "@/components/shared/Container";
import ServiceSerching from "./_components/ServiceSerching";

const getServices = async (params) => {
  console.log(params)
  const getParams = new URLSearchParams(params).toString()
  console.log(getParams)
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`,
  );
  const data = await res?.json();
  return data.data || [];
};

const servicesPage = async ({searchParams}) => {
  const getParams = await searchParams
 
  const services = await getServices({...getParams});

  return (
    <div>
      <Container>

       <ServiceSerching/>

        <div>
          {services.length === 0 ? (
            <h2 className="text-center text-3xl text-purple-600">
              Services not found{" "}
            </h2>
          ) : (
            <div className="grid my-5 grid-cols-3 gap-4">
              {services?.map((service) => (
                <ServiceCard key={service?._id} service={service} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default servicesPage;
