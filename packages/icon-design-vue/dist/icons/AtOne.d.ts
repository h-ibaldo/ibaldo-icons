import type { DefineComponent } from 'vue';

export interface AtOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtOne: DefineComponent<AtOneProps>;

export default AtOne;
export { AtOne };
