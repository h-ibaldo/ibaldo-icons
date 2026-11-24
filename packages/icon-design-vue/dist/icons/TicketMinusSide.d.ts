import type { DefineComponent } from 'vue';

export interface TicketMinusSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketMinusSide: DefineComponent<TicketMinusSideProps>;

export default TicketMinusSide;
export { TicketMinusSide };
