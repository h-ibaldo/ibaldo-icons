import type { DefineComponent } from 'vue';

export interface TicketCheckTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketCheckTall: DefineComponent<TicketCheckTallProps>;

export default TicketCheckTall;
export { TicketCheckTall };
