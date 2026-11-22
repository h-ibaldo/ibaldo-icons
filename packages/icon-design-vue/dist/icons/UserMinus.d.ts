import type { DefineComponent } from 'vue';

export interface UserMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserMinus: DefineComponent<UserMinusProps>;

export default UserMinus;
export { UserMinus };
