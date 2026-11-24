import type { DefineComponent } from 'vue';

export interface WindowMedalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMedal: DefineComponent<WindowMedalProps>;

export default WindowMedal;
export { WindowMedal };
