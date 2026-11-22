import type { DefineComponent } from 'vue';

export interface UserSquareWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSquareWide: DefineComponent<UserSquareWideProps>;

export default UserSquareWide;
export { UserSquareWide };
