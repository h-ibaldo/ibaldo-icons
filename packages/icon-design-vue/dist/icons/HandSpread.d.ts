import type { DefineComponent } from 'vue';

export interface HandSpreadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSpread: DefineComponent<HandSpreadProps>;

export default HandSpread;
export { HandSpread };
