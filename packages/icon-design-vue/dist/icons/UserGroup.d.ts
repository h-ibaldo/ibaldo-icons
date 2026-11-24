import type { DefineComponent } from 'vue';

export interface UserGroupProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserGroup: DefineComponent<UserGroupProps>;

export default UserGroup;
export { UserGroup };
