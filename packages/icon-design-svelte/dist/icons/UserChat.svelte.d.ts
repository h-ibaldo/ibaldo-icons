import { SvelteComponent } from 'svelte';

export interface UserChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserChat extends SvelteComponent<UserChatProps> {}
