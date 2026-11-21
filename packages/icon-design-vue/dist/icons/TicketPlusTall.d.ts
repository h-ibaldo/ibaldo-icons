import type { DefineComponent } from 'vue';

export interface TicketPlusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPlusTall: DefineComponent<TicketPlusTallProps>;

export default TicketPlusTall;
export { TicketPlusTall };
