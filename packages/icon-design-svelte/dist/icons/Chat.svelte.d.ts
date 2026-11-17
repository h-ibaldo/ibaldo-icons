import { SvelteComponent } from 'svelte';

export interface ChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Chat extends SvelteComponent<ChatProps> {}
