import type { DefineComponent } from 'vue';

export interface TicketStubSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketStubSide: DefineComponent<TicketStubSideProps>;

export default TicketStubSide;
export { TicketStubSide };
