import type { DefineComponent } from 'vue';

export interface MoveHandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoveHand: DefineComponent<MoveHandProps>;

export default MoveHand;
export { MoveHand };
