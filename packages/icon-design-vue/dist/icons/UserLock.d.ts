import type { DefineComponent } from 'vue';

export interface UserLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserLock: DefineComponent<UserLockProps>;

export default UserLock;
export { UserLock };
