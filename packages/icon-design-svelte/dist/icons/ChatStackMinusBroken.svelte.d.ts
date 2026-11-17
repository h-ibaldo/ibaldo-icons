import { SvelteComponent } from 'svelte';

export interface ChatStackMinusBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusBroken extends SvelteComponent<ChatStackMinusBrokenProps> {}
