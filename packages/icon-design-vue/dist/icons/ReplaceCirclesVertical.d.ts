import type { DefineComponent } from 'vue';

export interface ReplaceCirclesVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReplaceCirclesVertical: DefineComponent<ReplaceCirclesVerticalProps>;

export default ReplaceCirclesVertical;
export { ReplaceCirclesVertical };
