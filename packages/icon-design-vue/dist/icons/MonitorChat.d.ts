import type { DefineComponent } from 'vue';

export interface MonitorChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorChat: DefineComponent<MonitorChatProps>;

export default MonitorChat;
export { MonitorChat };
