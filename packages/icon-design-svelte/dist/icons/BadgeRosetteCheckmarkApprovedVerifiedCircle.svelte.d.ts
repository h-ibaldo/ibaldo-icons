import { SvelteComponent } from 'svelte';

export interface BadgeRosetteCheckmarkApprovedVerifiedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeRosetteCheckmarkApprovedVerifiedCircle extends SvelteComponent<BadgeRosetteCheckmarkApprovedVerifiedCircleProps> {}
