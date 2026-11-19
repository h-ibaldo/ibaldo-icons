import type { DefineComponent } from 'vue';

export interface CubeFocusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CubeFocus: DefineComponent<CubeFocusProps>;

export default CubeFocus;
export { CubeFocus };
