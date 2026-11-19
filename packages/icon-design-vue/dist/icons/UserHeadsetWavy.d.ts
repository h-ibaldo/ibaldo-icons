import type { DefineComponent } from 'vue';

export interface UserHeadsetWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserHeadsetWavy: DefineComponent<UserHeadsetWavyProps>;

export default UserHeadsetWavy;
export { UserHeadsetWavy };
