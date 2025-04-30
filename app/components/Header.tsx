

export const Header = () => {
  return (
    <header className="bg-white shadow px-y px-6 flex 
    justify-between items-center">
        <h1 className="text-xl font-semibold">Basti el mataqks</h1>
        <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">
                Juan José
            </span>
            <img src="https://fanatics.frgimages.com/los-angeles-lakers/fanatics-authentic-kobe-bryant-los-angeles-lakers-16-x-20-hardwood-classics-trophies-canvas-photo_pi3955000_ff_3955888-4248ebbb1eed43f24444_full.jpg?_hv=2" 
            width={40}
            height={40}
            className="rounded-full border"
            alt="avatar" />
        </div>
    </header>
  )
}
