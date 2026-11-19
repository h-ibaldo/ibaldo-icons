import type { DefineComponent } from 'vue';

export interface AtCheckTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCheckTall: DefineComponent<AtCheckTallProps>;

export default AtCheckTall;
export { AtCheckTall };
