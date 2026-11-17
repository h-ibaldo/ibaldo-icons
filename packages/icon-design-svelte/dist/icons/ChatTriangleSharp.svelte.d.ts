import { SvelteComponent } from 'svelte';

export interface ChatTriangleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTriangleSharp extends SvelteComponent<ChatTriangleSharpProps> {}
