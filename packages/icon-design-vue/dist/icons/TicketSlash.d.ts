import type { DefineComponent } from 'vue';

export interface TicketSlashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketSlash: DefineComponent<TicketSlashProps>;

export default TicketSlash;
export { TicketSlash };
