import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleBoxy extends SvelteComponent<ChatStackTriangleBoxyProps> {}
