import Image from "next/image";
import Link from "next/link";
import BookingBtn from "./-components/BookingBtn";

export function generateStaticParams() {
  return [
    { slug: "6730ac1b66a012cf8bbd6db4" },
    { slug: "6730aac9af70525950f07b66" },
  ];
}

const getSingleService = async (id) => {
  try {
    const res = await fetch(
      `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error("Failed to fetch service data:", error);
    return null;
  }
};

const ServiceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const service = await getSingleService(slug);

  if (!service || service.isDeleted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold text-slate-800">Service Not Found</h1>
        <p className="text-slate-500 mt-2">
          The requested service could not be found or has been removed.
        </p>
        <Link
          href="/services"
          className="mt-4 px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-xl hover:bg-indigo-700 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const { _id, name, description, price, img, isFeatured, duration } = service;

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-indigo-600 transition">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">{name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Banner Image */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
              {isFeatured && (
                <span className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
                  ★ Featured
                </span>
              )}
              <Image
                src={img}
                alt={name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* Service Header Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <h1 className="text-3xl font-extrabold text-slate-900">{name}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-700">
                  <span>⏱️ Duration:</span>
                  <span className="font-semibold text-slate-900">
                    {duration} Mins
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-medium">
                  <span>✨ Quality Service Guaranteed</span>
                </div>
              </div>
            </div>

            {/* HTML Description Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Service Overview
              </h2>
              <div
                className="prose prose-indigo max-w-none text-slate-600 prose-headings:text-slate-800 prose-strong:text-slate-800 prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl p-6 shadow-md border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Service Price
                </span>
                <div className="text-4xl font-extrabold text-indigo-600">
                  ${price}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Includes taxes, professional staff, and standard service
                  materials.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Est. Duration</span>
                  <span className="font-semibold text-slate-800">
                    {duration} Minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Type</span>
                  <span className="font-semibold text-slate-800">Car Wash</span>
                </div>
              </div>

              <BookingBtn service={service} />

              <p className="text-xs text-center text-slate-400">
                Instant confirmation upon booking completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailsPage;
