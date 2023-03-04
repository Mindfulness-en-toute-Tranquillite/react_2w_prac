import { createContext } from "react";


//애플리케이션 전체에서 사용할 수 있는 context가 웹애플리케이션 전체에서
//라기 보다는 나중에 props로 주입하는 그 하위 컴포넌트들에서 사용할
//수 있는 context가 완성이 되었다. 이걸 가져다 쓰면 된다.
export const FamilyContext = createContext(null);