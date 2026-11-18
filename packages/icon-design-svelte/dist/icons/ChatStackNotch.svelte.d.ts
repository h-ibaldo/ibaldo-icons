import { SvelteComponent } from 'svelte';

export interface ChatStackNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackNotch extends SvelteComponent<ChatStackNotchProps> {}
