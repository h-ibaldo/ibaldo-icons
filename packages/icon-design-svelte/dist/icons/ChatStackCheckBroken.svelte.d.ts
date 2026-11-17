import { SvelteComponent } from 'svelte';

export interface ChatStackCheckBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckBroken extends SvelteComponent<ChatStackCheckBrokenProps> {}
