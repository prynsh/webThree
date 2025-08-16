import { galleryData } from "@/data"


interface NFTCardProps {
  id: number
  title: string
  image: string
}

function NFTCard({ title, image }: NFTCardProps) {
  return (
    <div className="bg-gray-100 aspect-[3/4] flex items-center justify-center relative overflow-hidden group cursor-pointer transition-colors duration-200 hover:border-orange-500">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.nextElementSibling?.classList.remove("hidden");
        }}
      />
      <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-200">
        <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2-.9 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#FF6348] font-[Atomos-Regular] text-xl text-white px-4 py-2 flex justify-between items-center translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
        <span className="font-semibold text-sm">BUY MINT</span>
        <span className="font-semibold text-sm">20 SOL</span>
      </div>
    </div>
  );
}


export default function NFTGallery() {
  return (
    <div className="bg-gray-900 p-8 w-full">
      <div className=" mx-auto">
        {galleryData.reduce((rows: any[][], item, index) => {
          if (index % 4 === 0) rows.push([]); // start new row every 4 cards
          rows[rows.length - 1].push(item);
          return rows;
        }, []).map((row, rowIndex, allRows) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-4 gap-4 ${
              rowIndex !== allRows.length - 1 ? "border-b pb-4 mb-4" : ""
            }`}
          >
            {row.map((item) => (
              <NFTCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
