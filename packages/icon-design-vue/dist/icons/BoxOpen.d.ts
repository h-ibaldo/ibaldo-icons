import type { DefineComponent } from 'vue';

export interface BoxOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxOpen: DefineComponent<BoxOpenProps>;

export default BoxOpen;
export { BoxOpen };
