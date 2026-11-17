import { SvelteComponent } from 'svelte';

export interface ChatStackOffBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffBroken extends SvelteComponent<ChatStackOffBrokenProps> {}
