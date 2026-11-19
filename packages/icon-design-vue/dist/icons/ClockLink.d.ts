import type { DefineComponent } from 'vue';

export interface ClockLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockLink: DefineComponent<ClockLinkProps>;

export default ClockLink;
export { ClockLink };
