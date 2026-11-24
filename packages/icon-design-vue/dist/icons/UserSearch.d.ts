import type { DefineComponent } from 'vue';

export interface UserSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserSearch: DefineComponent<UserSearchProps>;

export default UserSearch;
export { UserSearch };
