import type { DefineComponent } from 'vue';

export interface TicketMinusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketMinusTall: DefineComponent<TicketMinusTallProps>;

export default TicketMinusTall;
export { TicketMinusTall };
