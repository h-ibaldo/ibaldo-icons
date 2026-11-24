import type { DefineComponent } from 'vue';

export interface UserDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserDouble: DefineComponent<UserDoubleProps>;

export default UserDouble;
export { UserDouble };
