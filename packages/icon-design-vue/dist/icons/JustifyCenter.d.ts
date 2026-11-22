import type { DefineComponent } from 'vue';

export interface JustifyCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyCenter: DefineComponent<JustifyCenterProps>;

export default JustifyCenter;
export { JustifyCenter };
