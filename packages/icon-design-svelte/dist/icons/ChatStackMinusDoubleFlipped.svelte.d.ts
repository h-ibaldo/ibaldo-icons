import { SvelteComponent } from 'svelte';

export interface ChatStackMinusDoubleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusDoubleFlipped extends SvelteComponent<ChatStackMinusDoubleFlippedProps> {}
