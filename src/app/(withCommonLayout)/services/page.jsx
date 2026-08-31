import React from "react";
import ServiceCard from "./_components/ServiceCard";
import Container from "@/components/shared/Container";

const getServices = async () => {
  const res = await fetch(
    "https://car-washing-system-cleanify-server.vercel.app/api/v1/services",
  );
  const data = await res?.json();
  return data.data || [];
};

const servicesPage = async () => {
  const services = await getServices();

  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default servicesPage;
