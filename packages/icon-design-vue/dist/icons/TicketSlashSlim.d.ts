import type { DefineComponent } from 'vue';

export interface TicketSlashSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketSlashSlim: DefineComponent<TicketSlashSlimProps>;

export default TicketSlashSlim;
export { TicketSlashSlim };
