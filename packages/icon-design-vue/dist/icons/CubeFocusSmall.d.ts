import type { DefineComponent } from 'vue';

export interface CubeFocusSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CubeFocusSmall: DefineComponent<CubeFocusSmallProps>;

export default CubeFocusSmall;
export { CubeFocusSmall };
