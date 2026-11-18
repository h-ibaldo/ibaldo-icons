import { SvelteComponent } from 'svelte';

export interface ChatTriangleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTriangleBoxy extends SvelteComponent<ChatTriangleBoxyProps> {}
