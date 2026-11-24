import type { DefineComponent } from 'vue';

export interface BoxFrontPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontPlus: DefineComponent<BoxFrontPlusProps>;

export default BoxFrontPlus;
export { BoxFrontPlus };
