import type { DefineComponent } from 'vue';

export interface UserSearchWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSearchWide: DefineComponent<UserSearchWideProps>;

export default UserSearchWide;
export { UserSearchWide };
