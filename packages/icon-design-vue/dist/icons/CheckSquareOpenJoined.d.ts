import type { DefineComponent } from 'vue';

export interface CheckSquareOpenJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenJoined: DefineComponent<CheckSquareOpenJoinedProps>;

export default CheckSquareOpenJoined;
export { CheckSquareOpenJoined };
