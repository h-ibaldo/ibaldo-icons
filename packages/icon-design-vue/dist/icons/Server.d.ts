import type { DefineComponent } from 'vue';

export interface ServerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Server: DefineComponent<ServerProps>;

export default Server;
export { Server };
