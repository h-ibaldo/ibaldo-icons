import type { DefineComponent } from 'vue';

export interface UserHeadsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserHeadset: DefineComponent<UserHeadsetProps>;

export default UserHeadset;
export { UserHeadset };
