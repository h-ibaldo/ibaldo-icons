import { SvelteComponent } from 'svelte';

export interface ChatDollarBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollarBoxy extends SvelteComponent<ChatDollarBoxyProps> {}
