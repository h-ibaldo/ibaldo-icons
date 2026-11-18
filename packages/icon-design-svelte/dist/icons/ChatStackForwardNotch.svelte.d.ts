import { SvelteComponent } from 'svelte';

export interface ChatStackForwardNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardNotch extends SvelteComponent<ChatStackForwardNotchProps> {}
