import type { DefineComponent } from 'vue';

export interface TicketPercentSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPercentSlim: DefineComponent<TicketPercentSlimProps>;

export default TicketPercentSlim;
export { TicketPercentSlim };
