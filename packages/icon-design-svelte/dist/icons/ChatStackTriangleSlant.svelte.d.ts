import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleSlant extends SvelteComponent<ChatStackTriangleSlantProps> {}
