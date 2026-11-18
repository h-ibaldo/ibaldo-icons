import { SvelteComponent } from 'svelte';

export interface ChatInfoSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoSharp extends SvelteComponent<ChatInfoSharpProps> {}
