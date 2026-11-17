import { SvelteComponent } from 'svelte';

export interface ChatEditSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditSharp extends SvelteComponent<ChatEditSharpProps> {}
