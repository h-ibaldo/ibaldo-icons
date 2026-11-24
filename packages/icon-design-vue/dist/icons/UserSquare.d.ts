import type { DefineComponent } from 'vue';

export interface UserSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSquare: DefineComponent<UserSquareProps>;

export default UserSquare;
export { UserSquare };
