import type { DefineComponent } from 'vue';

export interface AlignLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignLeft: DefineComponent<AlignLeftProps>;

export default AlignLeft;
export { AlignLeft };
