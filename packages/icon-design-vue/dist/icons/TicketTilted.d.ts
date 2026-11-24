import type { DefineComponent } from 'vue';

export interface TicketTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketTilted: DefineComponent<TicketTiltedProps>;

export default TicketTilted;
export { TicketTilted };
