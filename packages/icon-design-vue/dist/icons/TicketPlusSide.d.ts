import type { DefineComponent } from 'vue';

export interface TicketPlusSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPlusSide: DefineComponent<TicketPlusSideProps>;

export default TicketPlusSide;
export { TicketPlusSide };
