import { SvelteComponent } from 'svelte';

export interface ChatUnderlineTypingWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineTypingWide extends SvelteComponent<ChatUnderlineTypingWideProps> {}
