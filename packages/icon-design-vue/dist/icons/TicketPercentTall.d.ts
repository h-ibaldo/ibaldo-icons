import type { DefineComponent } from 'vue';

export interface TicketPercentTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPercentTall: DefineComponent<TicketPercentTallProps>;

export default TicketPercentTall;
export { TicketPercentTall };
