import { SvelteComponent } from 'svelte';

export interface UserChatWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserChatWide extends SvelteComponent<UserChatWideProps> {}
