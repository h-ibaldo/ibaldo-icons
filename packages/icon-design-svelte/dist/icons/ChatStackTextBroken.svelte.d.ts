import { SvelteComponent } from 'svelte';

export interface ChatStackTextBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextBroken extends SvelteComponent<ChatStackTextBrokenProps> {}
