import { SvelteComponent } from 'svelte';

export interface ChatVideoSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoSharp extends SvelteComponent<ChatVideoSharpProps> {}
