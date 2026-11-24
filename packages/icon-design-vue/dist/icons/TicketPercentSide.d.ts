import type { DefineComponent } from 'vue';

export interface TicketPercentSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketPercentSide: DefineComponent<TicketPercentSideProps>;

export default TicketPercentSide;
export { TicketPercentSide };
