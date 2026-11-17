import { SvelteComponent } from 'svelte';

export interface ChatStackCheckDoubleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckDoubleBroken extends SvelteComponent<ChatStackCheckDoubleBrokenProps> {}
