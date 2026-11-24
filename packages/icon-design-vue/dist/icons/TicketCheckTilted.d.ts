import type { DefineComponent } from 'vue';

export interface TicketCheckTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketCheckTilted: DefineComponent<TicketCheckTiltedProps>;

export default TicketCheckTilted;
export { TicketCheckTilted };
