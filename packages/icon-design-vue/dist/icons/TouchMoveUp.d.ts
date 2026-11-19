import type { DefineComponent } from 'vue';

export interface TouchMoveUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchMoveUp: DefineComponent<TouchMoveUpProps>;

export default TouchMoveUp;
export { TouchMoveUp };
