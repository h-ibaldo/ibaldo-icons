import { SvelteComponent } from 'svelte';

export interface ChatLockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockWide extends SvelteComponent<ChatLockWideProps> {}
