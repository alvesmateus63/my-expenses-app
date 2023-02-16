import "styled-components";

import Theme from "./themes/Theme";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
