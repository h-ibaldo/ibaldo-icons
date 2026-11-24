import type { DefineComponent } from 'vue';

export interface BorderVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderVertical: DefineComponent<BorderVerticalProps>;

export default BorderVertical;
export { BorderVertical };
