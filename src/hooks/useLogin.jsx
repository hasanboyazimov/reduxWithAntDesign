import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { toast } from "sonner";

function useLogin() {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (userInfo) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      const user = userCredential.user;
      // Faqat kerakli serializable qismlarini olish
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        // boshqa kerakli serializable qiymatlar
      };
      dispatch(login(userData));
      toast.success("Welcome back");
    } catch (error) {
      const errorMessage = error.message;
      console.log(error);
      toast.error(errorMessage);
    }
  };

  return { loginWithEmailAndPassword };
}

export { useLogin };
