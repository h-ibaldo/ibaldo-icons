import { SvelteComponent } from 'svelte';

export interface ChatStackCheckDoubleCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckDoubleCornerNotch extends SvelteComponent<ChatStackCheckDoubleCornerNotchProps> {}
