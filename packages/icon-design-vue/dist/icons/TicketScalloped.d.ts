import type { DefineComponent } from 'vue';

export interface TicketScallopedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketScalloped: DefineComponent<TicketScallopedProps>;

export default TicketScalloped;
export { TicketScalloped };
