import { SvelteComponent } from 'svelte';

export interface ChatStackSunLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunLayered extends SvelteComponent<ChatStackSunLayeredProps> {}
