import { SvelteComponent } from 'svelte';

export interface ChatTypingWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingWide extends SvelteComponent<ChatTypingWideProps> {}
