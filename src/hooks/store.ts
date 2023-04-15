import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

//En lugar de usar el useSelector y el use Dispatch directaente creas un hook que tenga integrado el tipo 
// y se usa en lugar del useSelector y useDispatch