import type { DefineComponent } from 'vue';

export interface AlignRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignRight: DefineComponent<AlignRightProps>;

export default AlignRight;
export { AlignRight };
