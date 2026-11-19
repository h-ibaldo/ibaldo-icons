import type { DefineComponent } from 'vue';

export interface AdjustPairVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustPairVertical: DefineComponent<AdjustPairVerticalProps>;

export default AdjustPairVertical;
export { AdjustPairVertical };
