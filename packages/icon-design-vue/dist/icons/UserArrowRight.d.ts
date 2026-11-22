import type { DefineComponent } from 'vue';

export interface UserArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserArrowRight: DefineComponent<UserArrowRightProps>;

export default UserArrowRight;
export { UserArrowRight };
