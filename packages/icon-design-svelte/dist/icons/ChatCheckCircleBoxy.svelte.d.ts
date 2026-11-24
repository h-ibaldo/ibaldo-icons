import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleBoxy extends SvelteComponent<ChatCheckCircleBoxyProps> {}
