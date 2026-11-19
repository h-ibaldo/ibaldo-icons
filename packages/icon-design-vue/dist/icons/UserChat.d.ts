import type { DefineComponent } from 'vue';

export interface UserChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UserChat: DefineComponent<UserChatProps>;

export default UserChat;
export { UserChat };
