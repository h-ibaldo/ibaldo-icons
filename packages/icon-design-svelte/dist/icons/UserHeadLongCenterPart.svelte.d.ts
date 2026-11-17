import { SvelteComponent } from 'svelte';

export interface UserHeadLongCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadLongCenterPart extends SvelteComponent<UserHeadLongCenterPartProps> {}
