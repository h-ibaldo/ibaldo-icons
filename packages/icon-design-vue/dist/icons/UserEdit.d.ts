import type { DefineComponent } from 'vue';

export interface UserEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserEdit: DefineComponent<UserEditProps>;

export default UserEdit;
export { UserEdit };
