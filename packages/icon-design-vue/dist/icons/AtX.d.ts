import type { DefineComponent } from 'vue';

export interface AtXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtX: DefineComponent<AtXProps>;

export default AtX;
export { AtX };
