import type { DefineComponent } from 'vue';

export interface AtXTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtXTall: DefineComponent<AtXTallProps>;

export default AtXTall;
export { AtXTall };
