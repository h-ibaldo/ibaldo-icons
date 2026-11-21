import type { DefineComponent } from 'vue';

export interface FoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Fox: DefineComponent<FoxProps>;

export default Fox;
export { Fox };
