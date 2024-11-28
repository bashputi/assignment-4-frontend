import { useEffect } from "react";
import { cartProduct } from "../Redux/features/CartSlice";
import { useAppSelector } from "../redux/hooks";



const usePageRefresh = () => {
    const cartItems = useAppSelector(cartProduct);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (cartItems.length > 0) {
                const confirmationMessage = "You have items in your cart. Are you sure you want to leave?";
                event.returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };

    }, [cartItems]);
};

export default usePageRefresh;