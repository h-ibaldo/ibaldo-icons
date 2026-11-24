import type { DefineComponent } from 'vue';

export interface CrosshairPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrosshairPlus: DefineComponent<CrosshairPlusProps>;

export default CrosshairPlus;
export { CrosshairPlus };
