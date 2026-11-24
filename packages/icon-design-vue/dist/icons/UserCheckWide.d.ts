import type { DefineComponent } from 'vue';

export interface UserCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserCheckWide: DefineComponent<UserCheckWideProps>;

export default UserCheckWide;
export { UserCheckWide };
