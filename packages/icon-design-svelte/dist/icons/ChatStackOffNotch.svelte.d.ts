import { SvelteComponent } from 'svelte';

export interface ChatStackOffNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffNotch extends SvelteComponent<ChatStackOffNotchProps> {}
