import { SvelteComponent } from 'svelte';

export interface ChatOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOffWide extends SvelteComponent<ChatOffWideProps> {}
