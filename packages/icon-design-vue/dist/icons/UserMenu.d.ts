import type { DefineComponent } from 'vue';

export interface UserMenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserMenu: DefineComponent<UserMenuProps>;

export default UserMenu;
export { UserMenu };
