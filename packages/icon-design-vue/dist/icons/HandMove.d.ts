import type { DefineComponent } from 'vue';

export interface HandMoveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandMove: DefineComponent<HandMoveProps>;

export default HandMove;
export { HandMove };
