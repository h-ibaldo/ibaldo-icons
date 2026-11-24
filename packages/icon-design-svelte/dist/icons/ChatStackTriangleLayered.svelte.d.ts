import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleLayered extends SvelteComponent<ChatStackTriangleLayeredProps> {}
