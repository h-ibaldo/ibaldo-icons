import { SvelteComponent } from 'svelte';

export interface ChatReplyWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyWide extends SvelteComponent<ChatReplyWideProps> {}
