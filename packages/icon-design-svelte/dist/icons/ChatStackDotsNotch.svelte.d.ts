import { SvelteComponent } from 'svelte';

export interface ChatStackDotsNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsNotch extends SvelteComponent<ChatStackDotsNotchProps> {}
