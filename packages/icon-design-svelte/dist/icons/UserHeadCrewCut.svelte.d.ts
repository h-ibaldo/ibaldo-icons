import { SvelteComponent } from 'svelte';

export interface UserHeadCrewCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadCrewCut extends SvelteComponent<UserHeadCrewCutProps> {}
