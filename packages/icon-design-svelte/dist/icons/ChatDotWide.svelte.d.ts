import { SvelteComponent } from 'svelte';

export interface ChatDotWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotWide extends SvelteComponent<ChatDotWideProps> {}
