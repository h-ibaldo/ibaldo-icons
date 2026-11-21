import type { DefineComponent } from 'vue';

export interface TicketXTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketXTilted: DefineComponent<TicketXTiltedProps>;

export default TicketXTilted;
export { TicketXTilted };
