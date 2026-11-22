import type { DefineComponent } from 'vue';

export interface UserPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserPlus: DefineComponent<UserPlusProps>;

export default UserPlus;
export { UserPlus };
