import type { DefineComponent } from 'vue';

export interface TicketXSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketXSlim: DefineComponent<TicketXSlimProps>;

export default TicketXSlim;
export { TicketXSlim };
