import { SvelteComponent } from 'svelte';

export interface ChatTriangleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTriangleSlant extends SvelteComponent<ChatTriangleSlantProps> {}
