import type { DefineComponent } from 'vue';

export interface UserGroupContourProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserGroupContour: DefineComponent<UserGroupContourProps>;

export default UserGroupContour;
export { UserGroupContour };
