import type { DefineComponent } from 'vue';

export interface UserArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserArrowDown: DefineComponent<UserArrowDownProps>;

export default UserArrowDown;
export { UserArrowDown };
