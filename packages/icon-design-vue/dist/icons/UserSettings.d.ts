import type { DefineComponent } from 'vue';

export interface UserSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSettings: DefineComponent<UserSettingsProps>;

export default UserSettings;
export { UserSettings };
