import { SvelteComponent } from 'svelte';

export interface ChatMinusBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusBroken extends SvelteComponent<ChatMinusBrokenProps> {}
