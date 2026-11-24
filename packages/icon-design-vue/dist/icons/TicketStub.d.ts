import type { DefineComponent } from 'vue';

export interface TicketStubProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketStub: DefineComponent<TicketStubProps>;

export default TicketStub;
export { TicketStub };
