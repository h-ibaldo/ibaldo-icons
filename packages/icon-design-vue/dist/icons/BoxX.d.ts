import type { DefineComponent } from 'vue';

export interface BoxXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxX: DefineComponent<BoxXProps>;

export default BoxX;
export { BoxX };
