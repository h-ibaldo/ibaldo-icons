import { SvelteComponent } from 'svelte';

export interface ChatTextOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffWide extends SvelteComponent<ChatTextOffWideProps> {}
