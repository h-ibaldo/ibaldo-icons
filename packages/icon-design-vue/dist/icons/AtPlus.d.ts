import type { DefineComponent } from 'vue';

export interface AtPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtPlus: DefineComponent<AtPlusProps>;

export default AtPlus;
export { AtPlus };
