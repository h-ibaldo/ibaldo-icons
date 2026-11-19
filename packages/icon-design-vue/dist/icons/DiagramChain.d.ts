import type { DefineComponent } from 'vue';

export interface DiagramChainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramChain: DefineComponent<DiagramChainProps>;

export default DiagramChain;
export { DiagramChain };
