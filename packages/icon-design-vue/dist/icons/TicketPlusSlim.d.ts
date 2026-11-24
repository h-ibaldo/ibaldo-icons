import type { DefineComponent } from 'vue';

export interface TicketPlusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPlusSlim: DefineComponent<TicketPlusSlimProps>;

export default TicketPlusSlim;
export { TicketPlusSlim };
