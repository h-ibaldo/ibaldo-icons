import { SvelteComponent } from 'svelte';

export interface ChatXDoubleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleBoxy extends SvelteComponent<ChatXDoubleBoxyProps> {}
