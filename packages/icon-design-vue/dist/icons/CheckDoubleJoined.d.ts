import type { DefineComponent } from 'vue';

export interface CheckDoubleJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckDoubleJoined: DefineComponent<CheckDoubleJoinedProps>;

export default CheckDoubleJoined;
export { CheckDoubleJoined };
