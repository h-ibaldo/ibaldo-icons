import { SvelteComponent } from 'svelte';

export interface ChatStackCheckDoubleLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckDoubleLayered extends SvelteComponent<ChatStackCheckDoubleLayeredProps> {}
