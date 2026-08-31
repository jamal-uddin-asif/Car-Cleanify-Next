export default function ServiceCardSkeleton() {
  return (
    <div className="flex flex-col max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-slate-200" />

      {/* Content Skeleton */}
      <div className="flex flex-col flex-1 p-5">
        
        {/* Title & Duration Skeleton */}
        <div className="flex justify-between items-center mb-3">
          <div className="h-6 bg-slate-200 rounded-md w-3/5" />
          <div className="h-5 bg-slate-200 rounded-md w-16" />
        </div>

        {/* Description Skeleton Lines */}
        <div className="space-y-2 mb-4">
          <div className="h-3.5 bg-slate-200 rounded-md w-full" />
          <div className="h-3.5 bg-slate-200 rounded-md w-5/6" />
          <div className="h-3.5 bg-slate-200 rounded-md w-2/3" />
        </div>

        {/* Footer Skeleton */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-3 bg-slate-200 rounded-md w-10" />
            <div className="h-7 bg-slate-200 rounded-md w-16" />
          </div>

          <div className="h-9 bg-slate-200 rounded-xl w-24" />
        </div>

      </div>
    </div>
  );
}