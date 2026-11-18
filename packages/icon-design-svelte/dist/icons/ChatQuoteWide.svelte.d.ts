import { SvelteComponent } from 'svelte';

export interface ChatQuoteWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuoteWide extends SvelteComponent<ChatQuoteWideProps> {}
