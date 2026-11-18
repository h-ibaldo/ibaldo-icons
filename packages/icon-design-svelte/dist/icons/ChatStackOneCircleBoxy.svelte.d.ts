import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleBoxy extends SvelteComponent<ChatStackOneCircleBoxyProps> {}
