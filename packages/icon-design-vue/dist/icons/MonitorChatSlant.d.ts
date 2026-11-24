import type { DefineComponent } from 'vue';

export interface MonitorChatSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorChatSlant: DefineComponent<MonitorChatSlantProps>;

export default MonitorChatSlant;
export { MonitorChatSlant };
