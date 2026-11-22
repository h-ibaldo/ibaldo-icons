import type { DefineComponent } from 'vue';

export interface UserPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserPlusWide: DefineComponent<UserPlusWideProps>;

export default UserPlusWide;
export { UserPlusWide };
