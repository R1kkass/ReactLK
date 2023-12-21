import { useEffect } from "react";
import { useAppDispatch } from "../../app/store/hook";
import { addToken } from "../../app/store/TokenSlice";

const TokenWrapper = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addToken(localStorage.getItem("access_token")));
    });
    return null;
};

export default TokenWrapper;
