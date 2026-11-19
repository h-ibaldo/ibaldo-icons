import type { DefineComponent } from 'vue';

export interface ArrowCyclePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowCyclePlus: DefineComponent<ArrowCyclePlusProps>;

export default ArrowCyclePlus;
export { ArrowCyclePlus };
