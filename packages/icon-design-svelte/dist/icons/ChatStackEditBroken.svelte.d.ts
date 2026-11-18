import { SvelteComponent } from 'svelte';

export interface ChatStackEditBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditBroken extends SvelteComponent<ChatStackEditBrokenProps> {}
