import { SvelteComponent } from 'svelte';

export interface ChatMinusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusWide extends SvelteComponent<ChatMinusWideProps> {}
