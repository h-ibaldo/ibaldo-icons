import { SvelteComponent } from 'svelte';

export interface ChatStackHashLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHashLayered extends SvelteComponent<ChatStackHashLayeredProps> {}
