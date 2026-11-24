import type { DefineComponent } from 'vue';

export interface AlignTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignTop: DefineComponent<AlignTopProps>;

export default AlignTop;
export { AlignTop };
