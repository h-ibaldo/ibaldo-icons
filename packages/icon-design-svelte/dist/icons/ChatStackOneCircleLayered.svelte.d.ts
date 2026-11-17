import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleLayered extends SvelteComponent<ChatStackOneCircleLayeredProps> {}
