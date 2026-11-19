import type { DefineComponent } from 'vue';

export interface BorderRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderRight: DefineComponent<BorderRightProps>;

export default BorderRight;
export { BorderRight };
