import type { DefineComponent } from 'vue';

export interface TicketMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketMinus: DefineComponent<TicketMinusProps>;

export default TicketMinus;
export { TicketMinus };
