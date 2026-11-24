import type { DefineComponent } from 'vue';

export interface UserArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserArrowLeft: DefineComponent<UserArrowLeftProps>;

export default UserArrowLeft;
export { UserArrowLeft };
