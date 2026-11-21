import type { DefineComponent } from 'vue';

export interface TicketMinusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketMinusSlim: DefineComponent<TicketMinusSlimProps>;

export default TicketMinusSlim;
export { TicketMinusSlim };
