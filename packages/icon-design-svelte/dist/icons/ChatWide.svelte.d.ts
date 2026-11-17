import { SvelteComponent } from 'svelte';

export interface ChatWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWide extends SvelteComponent<ChatWideProps> {}
