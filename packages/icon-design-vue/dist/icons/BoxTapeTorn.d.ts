import type { DefineComponent } from 'vue';

export interface BoxTapeTornProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxTapeTorn: DefineComponent<BoxTapeTornProps>;

export default BoxTapeTorn;
export { BoxTapeTorn };
