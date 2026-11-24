import type { DefineComponent } from 'vue';

export interface UserXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserX: DefineComponent<UserXProps>;

export default UserX;
export { UserX };
