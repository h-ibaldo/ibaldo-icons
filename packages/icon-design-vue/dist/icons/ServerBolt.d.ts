import type { DefineComponent } from 'vue';

export interface ServerBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ServerBolt: DefineComponent<ServerBoltProps>;

export default ServerBolt;
export { ServerBolt };
