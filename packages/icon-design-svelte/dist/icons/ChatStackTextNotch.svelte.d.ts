import { SvelteComponent } from 'svelte';

export interface ChatStackTextNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextNotch extends SvelteComponent<ChatStackTextNotchProps> {}
