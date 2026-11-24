import type { DefineComponent } from 'vue';

export interface UserClockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserClockWide: DefineComponent<UserClockWideProps>;

export default UserClockWide;
export { UserClockWide };
