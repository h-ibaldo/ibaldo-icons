import type { DefineComponent } from 'vue';

export interface MoonCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoonCircle: DefineComponent<MoonCircleProps>;

export default MoonCircle;
export { MoonCircle };
