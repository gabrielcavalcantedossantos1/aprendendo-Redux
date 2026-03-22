import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/store";
import { setTheme } from "../Redux/Reducers/themeReducer";

export function Button() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  function handleClick() {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  }

  return (
    <div>
      O thema é: {theme}
      <button onClick={handleClick}>Alterar</button>
    </div>
  );
}
