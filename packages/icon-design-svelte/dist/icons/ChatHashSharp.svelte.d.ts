import { SvelteComponent } from 'svelte';

export interface ChatHashSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashSharp extends SvelteComponent<ChatHashSharpProps> {}
