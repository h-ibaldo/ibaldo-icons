import type { DefineComponent } from 'vue';

export interface SquareStackLockDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLockDashed: DefineComponent<SquareStackLockDashedProps>;

export default SquareStackLockDashed;
export { SquareStackLockDashed };
