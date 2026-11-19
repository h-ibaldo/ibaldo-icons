import type { DefineComponent } from 'vue';

export interface CheckSquareNestedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareNested: DefineComponent<CheckSquareNestedProps>;

export default CheckSquareNested;
export { CheckSquareNested };
