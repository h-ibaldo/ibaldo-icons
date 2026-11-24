import type { DefineComponent } from 'vue';

export interface UserStarWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserStarWide: DefineComponent<UserStarWideProps>;

export default UserStarWide;
export { UserStarWide };
