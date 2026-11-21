import type { DefineComponent } from 'vue';

export interface TicketSlashSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TicketSlashSide: DefineComponent<TicketSlashSideProps>;

export default TicketSlashSide;
export { TicketSlashSide };
