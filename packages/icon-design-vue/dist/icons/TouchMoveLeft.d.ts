import type { DefineComponent } from 'vue';

export interface TouchMoveLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchMoveLeft: DefineComponent<TouchMoveLeftProps>;

export default TouchMoveLeft;
export { TouchMoveLeft };
