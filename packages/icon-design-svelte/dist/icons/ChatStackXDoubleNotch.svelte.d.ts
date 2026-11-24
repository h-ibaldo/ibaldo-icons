import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleNotch extends SvelteComponent<ChatStackXDoubleNotchProps> {}
