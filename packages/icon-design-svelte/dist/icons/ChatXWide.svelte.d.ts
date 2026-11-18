import { SvelteComponent } from 'svelte';

export interface ChatXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXWide extends SvelteComponent<ChatXWideProps> {}
