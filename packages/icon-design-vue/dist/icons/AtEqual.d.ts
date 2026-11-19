import type { DefineComponent } from 'vue';

export interface AtEqualProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtEqual: DefineComponent<AtEqualProps>;

export default AtEqual;
export { AtEqual };
