import type { DefineComponent } from 'vue';

export interface GaugeDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDashed: DefineComponent<GaugeDashedProps>;

export default GaugeDashed;
export { GaugeDashed };
