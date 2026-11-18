import { SvelteComponent } from 'svelte';

export interface ChatEqualsBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsBroken extends SvelteComponent<ChatEqualsBrokenProps> {}
