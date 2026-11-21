import type { DefineComponent } from 'vue';

export interface TicketSlashTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketSlashTall: DefineComponent<TicketSlashTallProps>;

export default TicketSlashTall;
export { TicketSlashTall };
