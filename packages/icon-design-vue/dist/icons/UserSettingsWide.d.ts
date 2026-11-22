import type { DefineComponent } from 'vue';

export interface UserSettingsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSettingsWide: DefineComponent<UserSettingsWideProps>;

export default UserSettingsWide;
export { UserSettingsWide };
