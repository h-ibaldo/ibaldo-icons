import type { DefineComponent } from 'vue';

export interface CheckSquareCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareCompact: DefineComponent<CheckSquareCompactProps>;

export default CheckSquareCompact;
export { CheckSquareCompact };
