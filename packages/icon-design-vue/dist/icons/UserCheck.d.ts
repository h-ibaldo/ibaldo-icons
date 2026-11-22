import type { DefineComponent } from 'vue';

export interface UserCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserCheck: DefineComponent<UserCheckProps>;

export default UserCheck;
export { UserCheck };
