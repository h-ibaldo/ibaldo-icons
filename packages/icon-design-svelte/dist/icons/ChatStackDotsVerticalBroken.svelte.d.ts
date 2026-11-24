import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalBroken extends SvelteComponent<ChatStackDotsVerticalBrokenProps> {}
