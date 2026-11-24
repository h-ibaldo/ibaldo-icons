import type { DefineComponent } from 'vue';

export interface AnchorCircleBarbedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AnchorCircleBarbed: DefineComponent<AnchorCircleBarbedProps>;

export default AnchorCircleBarbed;
export { AnchorCircleBarbed };
