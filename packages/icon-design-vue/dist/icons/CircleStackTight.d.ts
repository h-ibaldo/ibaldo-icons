import type { DefineComponent } from 'vue';

export interface CircleStackTightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleStackTight: DefineComponent<CircleStackTightProps>;

export default CircleStackTight;
export { CircleStackTight };
