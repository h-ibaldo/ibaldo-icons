import { SvelteComponent } from 'svelte';

export interface ChatSearchSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchSharp extends SvelteComponent<ChatSearchSharpProps> {}
