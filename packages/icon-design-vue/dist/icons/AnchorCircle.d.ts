import type { DefineComponent } from 'vue';

export interface AnchorCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AnchorCircle: DefineComponent<AnchorCircleProps>;

export default AnchorCircle;
export { AnchorCircle };
