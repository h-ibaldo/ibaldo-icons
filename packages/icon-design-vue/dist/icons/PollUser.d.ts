import type { DefineComponent } from 'vue';

export interface PollUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollUser: DefineComponent<PollUserProps>;

export default PollUser;
export { PollUser };
