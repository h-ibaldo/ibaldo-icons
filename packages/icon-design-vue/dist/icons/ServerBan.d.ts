import type { DefineComponent } from 'vue';

export interface ServerBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ServerBan: DefineComponent<ServerBanProps>;

export default ServerBan;
export { ServerBan };
