// import original module declarations
import 'styled-components'; //import styled-componets

// and extend them!
declare module 'styled-components' { //styled-components의 theme 정의를 확장하는 것
  export interface DefaultTheme {
        textColor: string;
        bgColor : string;
        accentColor: string;
    };
}