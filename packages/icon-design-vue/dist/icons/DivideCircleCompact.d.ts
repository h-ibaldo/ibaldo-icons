import type { DefineComponent } from 'vue';

export interface DivideCircleCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DivideCircleCompact: DefineComponent<DivideCircleCompactProps>;

export default DivideCircleCompact;
export { DivideCircleCompact };
