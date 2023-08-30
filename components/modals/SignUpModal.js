import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modal.signupModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="hover:bg-[#cbd2d7] bg-white text-black bg-transparent border border-white  w-[160px] rounded-full h-[40px]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px]  bg-black text-white md:w-[560px]
        md:h-[600px] border border-gray-700 rounded-lg flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className=" mt-4 font-bold text-4xl text-center">
              Create your account
            </h1>
            <input
              placeholder="Full Name"
              className="mt-8 h-10 rounded-md bg-transparent border border-gray border-gray-700 p-6"
              type={"Name"}
            />
            <input
              placeholder="Email"
              className="mt-8 h-10 rounded-md bg-transparent border border-gray border-gray-700 p-6"
              type={"Email"}
            />
            <input
              placeholder="Password"
              className="mt-8 h-10 rounded-md bg-transparent border border-gray border-gray-700 p-6"
              type={"Email"}
            />
               <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}