import { SvelteComponent } from 'svelte';

export interface UserHeadShoulderCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadShoulderCenterPart extends SvelteComponent<UserHeadShoulderCenterPartProps> {}
