import type { DefineComponent } from 'vue';

export interface ClosedCaptionBarrelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBarrel: DefineComponent<ClosedCaptionBarrelProps>;

export default ClosedCaptionBarrel;
export { ClosedCaptionBarrel };
