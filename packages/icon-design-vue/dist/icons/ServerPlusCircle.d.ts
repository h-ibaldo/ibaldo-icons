import type { DefineComponent } from 'vue';

export interface ServerPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ServerPlusCircle: DefineComponent<ServerPlusCircleProps>;

export default ServerPlusCircle;
export { ServerPlusCircle };
