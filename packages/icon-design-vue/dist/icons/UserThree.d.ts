import type { DefineComponent } from 'vue';

export interface UserThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserThree: DefineComponent<UserThreeProps>;

export default UserThree;
export { UserThree };
