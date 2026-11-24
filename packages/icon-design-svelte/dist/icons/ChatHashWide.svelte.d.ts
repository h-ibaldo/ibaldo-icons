import { SvelteComponent } from 'svelte';

export interface ChatHashWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashWide extends SvelteComponent<ChatHashWideProps> {}
