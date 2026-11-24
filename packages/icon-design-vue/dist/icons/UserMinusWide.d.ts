import type { DefineComponent } from 'vue';

export interface UserMinusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserMinusWide: DefineComponent<UserMinusWideProps>;

export default UserMinusWide;
export { UserMinusWide };
