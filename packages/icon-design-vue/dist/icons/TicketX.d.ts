import type { DefineComponent } from 'vue';

export interface TicketXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketX: DefineComponent<TicketXProps>;

export default TicketX;
export { TicketX };
