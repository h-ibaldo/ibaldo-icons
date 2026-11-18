import { SvelteComponent } from 'svelte';

export interface ChatStackDollarCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDollarCornerNotch extends SvelteComponent<ChatStackDollarCornerNotchProps> {}
