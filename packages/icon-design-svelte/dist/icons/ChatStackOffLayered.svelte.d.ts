import { SvelteComponent } from 'svelte';

export interface ChatStackOffLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffLayered extends SvelteComponent<ChatStackOffLayeredProps> {}
