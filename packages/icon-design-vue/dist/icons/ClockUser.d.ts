import type { DefineComponent } from 'vue';

export interface ClockUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockUser: DefineComponent<ClockUserProps>;

export default ClockUser;
export { ClockUser };
