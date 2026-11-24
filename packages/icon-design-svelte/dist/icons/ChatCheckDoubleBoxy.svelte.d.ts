import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleBoxy extends SvelteComponent<ChatCheckDoubleBoxyProps> {}
