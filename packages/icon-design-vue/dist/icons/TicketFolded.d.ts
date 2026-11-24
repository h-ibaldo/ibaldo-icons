import type { DefineComponent } from 'vue';

export interface TicketFoldedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketFolded: DefineComponent<TicketFoldedProps>;

export default TicketFolded;
export { TicketFolded };
