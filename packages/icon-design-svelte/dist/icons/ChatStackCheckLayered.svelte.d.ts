import { SvelteComponent } from 'svelte';

export interface ChatStackCheckLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckLayered extends SvelteComponent<ChatStackCheckLayeredProps> {}
