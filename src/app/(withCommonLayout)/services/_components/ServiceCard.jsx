import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  if (!service) return null;

  const { name, description, price, img, isFeatured, duration, _id } = service;

  return (
    <div className="relative flex flex-col max-w-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-xl transition-shadow duration-300">
      
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-10 bg-amber-500 text-white text-xs font-semibold uppercase px-2.5 py-1 rounded-full shadow-md">
          Featured
        </div>
      )}

      {/* Service Image */}
      <div className="relative w-full h-48 bg-slate-100">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        
        {/* Title and Duration */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-slate-800 line-clamp-1">{name}</h3>
          <span className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md shrink-0">
            ⏱️ {duration} mins
          </span>
        </div>

        {/* HTML Description */}
        <div 
          className="text-slate-600 text-sm mb-4 line-clamp-3 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Footer: Price & CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Price</span>
            <span className="text-2xl font-extrabold text-indigo-600">${price}</span>
          </div>

          <Link href={`/services/${_id}`} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200">
            View details
          </Link>
        </div>

      </div>
    </div>
  );
}