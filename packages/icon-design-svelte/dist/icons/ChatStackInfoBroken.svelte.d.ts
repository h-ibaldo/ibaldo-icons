import { SvelteComponent } from 'svelte';

export interface ChatStackInfoBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoBroken extends SvelteComponent<ChatStackInfoBrokenProps> {}
