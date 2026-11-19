import type { DefineComponent } from 'vue';

export interface UserHeadsetSweptProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserHeadsetSwept: DefineComponent<UserHeadsetSweptProps>;

export default UserHeadsetSwept;
export { UserHeadsetSwept };
