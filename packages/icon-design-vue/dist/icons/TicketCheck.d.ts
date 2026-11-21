import type { DefineComponent } from 'vue';

export interface TicketCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketCheck: DefineComponent<TicketCheckProps>;

export default TicketCheck;
export { TicketCheck };
