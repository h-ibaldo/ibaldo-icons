import { SvelteComponent } from 'svelte';

export interface ChatReplyAllWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllWide extends SvelteComponent<ChatReplyAllWideProps> {}
