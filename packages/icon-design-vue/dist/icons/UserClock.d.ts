import type { DefineComponent } from 'vue';

export interface UserClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserClock: DefineComponent<UserClockProps>;

export default UserClock;
export { UserClock };
