import { SvelteComponent } from 'svelte';

export interface ChatStackForwardBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardBroken extends SvelteComponent<ChatStackForwardBrokenProps> {}
