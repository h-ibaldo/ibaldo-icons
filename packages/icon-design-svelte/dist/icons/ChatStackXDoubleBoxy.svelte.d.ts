import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleBoxy extends SvelteComponent<ChatStackXDoubleBoxyProps> {}
