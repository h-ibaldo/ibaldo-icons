import { SvelteComponent } from 'svelte';

export interface ChatStackSunBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunBroken extends SvelteComponent<ChatStackSunBrokenProps> {}
