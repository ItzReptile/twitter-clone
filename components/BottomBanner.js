import SignUpModal from "./modals/SignUpModal";

export default function BottomBanner() {
  return (
    <div className="flex items-center justify-center xl:space-x-[200px] fixed w-full h-[80px] bg-[#1d9bf0] bottom-0">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Dont Miss whats happening</h1>
        <span className="text-[18px] font-normal">
          Peoples on twitter are the first to know
        </span>
      </div>
      <div className="space-x-3">
        <button className="hover:bg-[#cbd2d7] bg-transparent border border-white text-white w-[160px] rounded-full h-[40px]">
          Login In
        </button>
<SignUpModal/>
      </div>
    </div>
  );
}
