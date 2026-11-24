import type { DefineComponent } from 'vue';

export interface UserWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserWide: DefineComponent<UserWideProps>;

export default UserWide;
export { UserWide };
