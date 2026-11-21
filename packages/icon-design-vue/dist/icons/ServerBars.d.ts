import type { DefineComponent } from 'vue';

export interface ServerBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ServerBars: DefineComponent<ServerBarsProps>;

export default ServerBars;
export { ServerBars };
