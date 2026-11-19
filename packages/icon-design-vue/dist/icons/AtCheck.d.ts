import type { DefineComponent } from 'vue';

export interface AtCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCheck: DefineComponent<AtCheckProps>;

export default AtCheck;
export { AtCheck };
