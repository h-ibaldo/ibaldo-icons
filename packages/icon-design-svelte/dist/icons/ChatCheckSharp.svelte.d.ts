import { SvelteComponent } from 'svelte';

export interface ChatCheckSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckSharp extends SvelteComponent<ChatCheckSharpProps> {}
