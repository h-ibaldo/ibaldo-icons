import type { DefineComponent } from 'vue';

export interface TicketSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketSlim: DefineComponent<TicketSlimProps>;

export default TicketSlim;
export { TicketSlim };
