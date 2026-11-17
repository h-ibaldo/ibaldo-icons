import { SvelteComponent } from 'svelte';

export interface BadgeRosetteQuestionUnverifiedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeRosetteQuestionUnverified extends SvelteComponent<BadgeRosetteQuestionUnverifiedProps> {}
