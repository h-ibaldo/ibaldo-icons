import type { DefineComponent } from 'vue';

export interface TicketCheckFoldedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketCheckFolded: DefineComponent<TicketCheckFoldedProps>;

export default TicketCheckFolded;
export { TicketCheckFolded };
