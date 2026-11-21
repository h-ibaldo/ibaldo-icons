import type { DefineComponent } from 'vue';

export interface TicketCheckSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketCheckSide: DefineComponent<TicketCheckSideProps>;

export default TicketCheckSide;
export { TicketCheckSide };
