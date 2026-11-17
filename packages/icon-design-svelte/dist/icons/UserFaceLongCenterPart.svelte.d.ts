import { SvelteComponent } from 'svelte';

export interface UserFaceLongCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongCenterPart extends SvelteComponent<UserFaceLongCenterPartProps> {}
