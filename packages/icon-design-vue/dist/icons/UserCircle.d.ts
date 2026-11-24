import type { DefineComponent } from 'vue';

export interface UserCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserCircle: DefineComponent<UserCircleProps>;

export default UserCircle;
export { UserCircle };
