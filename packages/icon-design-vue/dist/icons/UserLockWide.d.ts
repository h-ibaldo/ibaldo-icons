import type { DefineComponent } from 'vue';

export interface UserLockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserLockWide: DefineComponent<UserLockWideProps>;

export default UserLockWide;
export { UserLockWide };
