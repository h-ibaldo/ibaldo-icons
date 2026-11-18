import { SvelteComponent } from 'svelte';

export interface ChatImageBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageBroken extends SvelteComponent<ChatImageBrokenProps> {}
