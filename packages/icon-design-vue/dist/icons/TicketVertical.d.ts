import type { DefineComponent } from 'vue';

export interface TicketVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketVertical: DefineComponent<TicketVerticalProps>;

export default TicketVertical;
export { TicketVertical };
