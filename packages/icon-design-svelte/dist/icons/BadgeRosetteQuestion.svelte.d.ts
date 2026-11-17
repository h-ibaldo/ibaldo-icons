import { SvelteComponent } from 'svelte';

export interface BadgeRosetteQuestionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeRosetteQuestion extends SvelteComponent<BadgeRosetteQuestionProps> {}
