import { SvelteComponent } from 'svelte';

export interface ChatLockCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerWide extends SvelteComponent<ChatLockCornerWideProps> {}
