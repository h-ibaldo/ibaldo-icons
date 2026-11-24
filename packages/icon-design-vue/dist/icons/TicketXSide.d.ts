import type { DefineComponent } from 'vue';

export interface TicketXSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketXSide: DefineComponent<TicketXSideProps>;

export default TicketXSide;
export { TicketXSide };
