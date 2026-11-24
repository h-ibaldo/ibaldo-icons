import type { DefineComponent } from 'vue';

export interface TouchMoveDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchMoveDown: DefineComponent<TouchMoveDownProps>;

export default TouchMoveDown;
export { TouchMoveDown };
