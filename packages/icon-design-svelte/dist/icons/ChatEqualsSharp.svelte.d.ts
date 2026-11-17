import { SvelteComponent } from 'svelte';

export interface ChatEqualsSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsSharp extends SvelteComponent<ChatEqualsSharpProps> {}
