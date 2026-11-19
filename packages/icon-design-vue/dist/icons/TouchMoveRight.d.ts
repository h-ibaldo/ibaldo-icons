import type { DefineComponent } from 'vue';

export interface TouchMoveRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchMoveRight: DefineComponent<TouchMoveRightProps>;

export default TouchMoveRight;
export { TouchMoveRight };
