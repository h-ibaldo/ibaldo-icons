import type { DefineComponent } from 'vue';

export interface UserHeadsetSpikyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserHeadsetSpiky: DefineComponent<UserHeadsetSpikyProps>;

export default UserHeadsetSpiky;
export { UserHeadsetSpiky };
