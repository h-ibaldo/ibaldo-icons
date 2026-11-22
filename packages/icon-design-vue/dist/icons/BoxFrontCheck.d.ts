import type { DefineComponent } from 'vue';

export interface BoxFrontCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontCheck: DefineComponent<BoxFrontCheckProps>;

export default BoxFrontCheck;
export { BoxFrontCheck };
