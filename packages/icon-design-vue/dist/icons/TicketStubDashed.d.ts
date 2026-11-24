import type { DefineComponent } from 'vue';

export interface TicketStubDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketStubDashed: DefineComponent<TicketStubDashedProps>;

export default TicketStubDashed;
export { TicketStubDashed };
