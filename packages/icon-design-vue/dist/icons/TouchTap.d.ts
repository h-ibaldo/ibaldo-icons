import type { DefineComponent } from 'vue';

export interface TouchTapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchTap: DefineComponent<TouchTapProps>;

export default TouchTap;
export { TouchTap };
