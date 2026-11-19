import type { DefineComponent } from 'vue';

export interface ClosedCaptionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaption: DefineComponent<ClosedCaptionProps>;

export default ClosedCaption;
export { ClosedCaption };
