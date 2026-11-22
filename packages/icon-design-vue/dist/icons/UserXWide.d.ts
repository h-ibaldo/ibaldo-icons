import type { DefineComponent } from 'vue';

export interface UserXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserXWide: DefineComponent<UserXWideProps>;

export default UserXWide;
export { UserXWide };
