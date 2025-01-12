import "styled-components";
import { colors, utils } from "@galileo-ui/tokens";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    utils: typeof utils;
  }
}
