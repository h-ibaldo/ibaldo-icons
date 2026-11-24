import type { DefineComponent } from 'vue';

export interface CheckSquareOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpen: DefineComponent<CheckSquareOpenProps>;

export default CheckSquareOpen;
export { CheckSquareOpen };
