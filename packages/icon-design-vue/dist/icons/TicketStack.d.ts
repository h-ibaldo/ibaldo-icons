import type { DefineComponent } from 'vue';

export interface TicketStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketStack: DefineComponent<TicketStackProps>;

export default TicketStack;
export { TicketStack };
