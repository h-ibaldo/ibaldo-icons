import { SvelteComponent } from 'svelte';

export interface ChatStackHeartLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartLayered extends SvelteComponent<ChatStackHeartLayeredProps> {}
