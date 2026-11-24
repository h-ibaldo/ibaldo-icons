import type { DefineComponent } from 'vue';

export interface UserStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserStack: DefineComponent<UserStackProps>;

export default UserStack;
export { UserStack };
