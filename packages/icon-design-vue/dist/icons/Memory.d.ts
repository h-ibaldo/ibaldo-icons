import type { DefineComponent } from 'vue';

export interface MemoryProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Memory: DefineComponent<MemoryProps>;

export default Memory;
export { Memory };
