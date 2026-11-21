import type { DefineComponent } from 'vue';

export interface TicketStackSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketStackSlim: DefineComponent<TicketStackSlimProps>;

export default TicketStackSlim;
export { TicketStackSlim };
