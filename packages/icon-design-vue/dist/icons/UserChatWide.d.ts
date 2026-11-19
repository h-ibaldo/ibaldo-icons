import type { DefineComponent } from 'vue';

export interface UserChatWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserChatWide: DefineComponent<UserChatWideProps>;

export default UserChatWide;
export { UserChatWide };
