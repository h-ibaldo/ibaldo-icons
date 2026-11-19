import type { DefineComponent } from 'vue';

export interface AtTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtTall: DefineComponent<AtTallProps>;

export default AtTall;
export { AtTall };
