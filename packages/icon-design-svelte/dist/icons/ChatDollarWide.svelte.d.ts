import { SvelteComponent } from 'svelte';

export interface ChatDollarWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollarWide extends SvelteComponent<ChatDollarWideProps> {}
