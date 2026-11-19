import type { DefineComponent } from 'vue';

export interface MonitorChatBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorChatBoxy: DefineComponent<MonitorChatBoxyProps>;

export default MonitorChatBoxy;
export { MonitorChatBoxy };
