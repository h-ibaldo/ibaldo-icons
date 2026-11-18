import { SvelteComponent } from 'svelte';

export interface ChatTextWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextWide extends SvelteComponent<ChatTextWideProps> {}
