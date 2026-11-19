import type { DefineComponent } from 'vue';

export interface AtEqualTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtEqualTall: DefineComponent<AtEqualTallProps>;

export default AtEqualTall;
export { AtEqualTall };
