import { SvelteComponent } from 'svelte';

export interface ChatSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSharp extends SvelteComponent<ChatSharpProps> {}
