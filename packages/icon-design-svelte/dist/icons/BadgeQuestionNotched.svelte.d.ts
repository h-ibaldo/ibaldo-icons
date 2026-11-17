import { SvelteComponent } from 'svelte';

export interface BadgeQuestionNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeQuestionNotched extends SvelteComponent<BadgeQuestionNotchedProps> {}
