import type { DefineComponent } from 'vue';

export interface NodesHubProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesHub: DefineComponent<NodesHubProps>;

export default NodesHub;
export { NodesHub };
