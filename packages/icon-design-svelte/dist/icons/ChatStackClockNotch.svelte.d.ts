import { SvelteComponent } from 'svelte';

export interface ChatStackClockNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockNotch extends SvelteComponent<ChatStackClockNotchProps> {}
