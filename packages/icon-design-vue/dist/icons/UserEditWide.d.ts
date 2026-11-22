import type { DefineComponent } from 'vue';

export interface UserEditWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserEditWide: DefineComponent<UserEditWideProps>;

export default UserEditWide;
export { UserEditWide };
