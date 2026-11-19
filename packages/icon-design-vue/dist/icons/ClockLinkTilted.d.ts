import type { DefineComponent } from 'vue';

export interface ClockLinkTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockLinkTilted: DefineComponent<ClockLinkTiltedProps>;

export default ClockLinkTilted;
export { ClockLinkTilted };
