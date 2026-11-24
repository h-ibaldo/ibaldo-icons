import { SvelteComponent } from 'svelte';

export interface ChatDotsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsWide extends SvelteComponent<ChatDotsWideProps> {}
