import type { DefineComponent } from 'vue';

export interface AlignCenterHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignCenterHorizontal: DefineComponent<AlignCenterHorizontalProps>;

export default AlignCenterHorizontal;
export { AlignCenterHorizontal };
