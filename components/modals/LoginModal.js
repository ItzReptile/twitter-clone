import { auth } from "@/firebase";
import { openLoginModal, closeLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modal.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guestunknown1234@gmail.com", "12121212");
  }
  return (
    <>
      <button
        className="  text-white bg-transparent border border-white  w-[160px] rounded-full h-[40px]"
        onClick={() => dispatch(openLoginModal())}
      >
        Login
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px]  bg-black text-white md:w-[560px]
        md:h-[600px] border border-gray-700 rounded-lg flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className=" mt-4 font-bold text-4xl text-center">
              Sign in to your account
            </h1>

            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-8 h-10 rounded-md bg-transparent border border-gray border-gray-700 p-6"
              type={"Email"}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-8 h-10 rounded-md bg-transparent border border-gray border-gray-700 p-6"
              type={"Password"}
            />

            <button
              onClick={handleSignIn}
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8"
            >
              Sign In
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <button onClick={handleGuestSignIn} className="bg-white text-black w-full font-bold text-lg p-2 mt-4 rounded-md">
              Sign in As guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
