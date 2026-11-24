import type { DefineComponent } from 'vue';

export interface TicketPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPlus: DefineComponent<TicketPlusProps>;

export default TicketPlus;
export { TicketPlus };
