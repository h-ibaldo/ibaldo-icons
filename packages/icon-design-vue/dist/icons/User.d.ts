import type { DefineComponent } from 'vue';

export interface UserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const User: DefineComponent<UserProps>;

export default User;
export { User };
