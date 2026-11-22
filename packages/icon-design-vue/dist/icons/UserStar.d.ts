import type { DefineComponent } from 'vue';

export interface UserStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserStar: DefineComponent<UserStarProps>;

export default UserStar;
export { UserStar };
