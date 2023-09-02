import { closeCommentModal } from "@/redux/modalSlice";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
export default function CommendModal() {
  const isOpen = useSelector((state) => state.modal.commentModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div className="sm:p-10 p-4 text-white rounded-lg bg-black border border-gray-500 w-full h-full sm:w-[600px] sm:h-[386px]">
          <div>
            <div className="flex space-x-3 ">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="/assets/kylie.png"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">Kylie</h1>
                  <h1 className="text-gray-500">@kylie</h1>
                </div>
                <p className="mt-1">this is awesome</p>
                <h1 className="text-gray-500 mt-2 text-[15px]">
                  Replying to <span className="text-[#1b9bf0]">@gsa</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-11">
            <div className="flex space-x-3 ">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="/assets/kylie.png"
              />
              <div className="w-full">
                <textarea
                  placeholder="Tweet Your Reply"
                  className="outline-none text-lg w-full bg-transparent resize-none"
                />
                <div className="flex justify-between">
                  <div className="flex space-x-0">
                    <div className="iconsAnimation">
                      <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                  </div>
                  <button>Tweet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
