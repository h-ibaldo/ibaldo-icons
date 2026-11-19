import type { DefineComponent } from 'vue';

export interface BoxTapeLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxTapeLabel: DefineComponent<BoxTapeLabelProps>;

export default BoxTapeLabel;
export { BoxTapeLabel };
