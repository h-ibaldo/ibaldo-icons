import type { DefineComponent } from 'vue';

export interface TicketPercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPercent: DefineComponent<TicketPercentProps>;

export default TicketPercent;
export { TicketPercent };
