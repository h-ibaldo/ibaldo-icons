import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalWide extends SvelteComponent<ChatDotsVerticalWideProps> {}
