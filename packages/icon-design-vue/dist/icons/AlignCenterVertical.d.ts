import type { DefineComponent } from 'vue';

export interface AlignCenterVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignCenterVertical: DefineComponent<AlignCenterVerticalProps>;

export default AlignCenterVertical;
export { AlignCenterVertical };
