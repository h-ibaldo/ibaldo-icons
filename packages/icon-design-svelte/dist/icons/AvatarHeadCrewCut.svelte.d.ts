import { SvelteComponent } from 'svelte';

export interface AvatarHeadCrewCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadCrewCut extends SvelteComponent<AvatarHeadCrewCutProps> {}
