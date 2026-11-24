import type { DefineComponent } from 'vue';

export interface SpaceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Space: DefineComponent<SpaceProps>;

export default Space;
export { Space };
