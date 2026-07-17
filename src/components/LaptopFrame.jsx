export default function LaptopFrame({ image, title }) {
  return (
    <div className="mx-auto w-full max-w-md select-none">
      {/* screen */}
      <div className="rounded-t-xl border-[6px] border-b-0 border-deep bg-[#0F1E1D] p-1.5 shadow-premium">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-md bg-[#0F1E1D]">
          {image ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className="hidden h-full w-full flex-col items-center justify-center gap-2 font-mono text-xs text-[#5F8F86]"
            style={{ display: image ? "none" : "flex" }}
          >
            <span>/assets/images/projects/</span>
            <span className="text-[#8CA6A0]">drop screenshot here</span>
          </div>
        </div>
      </div>
      {/* hinge */}
      <div className="h-2 rounded-b-sm bg-deep" />
      {/* base */}
      <div className="mx-auto h-2 w-[104%] max-w-md -translate-x-[2%] rounded-b-xl bg-gradient-to-b from-brass to-brass-dark shadow-card" />
    </div>
  );
}
