import type { DefineComponent } from 'vue';

export interface UserCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserCircleWide: DefineComponent<UserCircleWideProps>;

export default UserCircleWide;
export { UserCircleWide };
