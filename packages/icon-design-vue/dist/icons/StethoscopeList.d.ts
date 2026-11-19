import type { DefineComponent } from 'vue';

export interface StethoscopeListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StethoscopeList: DefineComponent<StethoscopeListProps>;

export default StethoscopeList;
export { StethoscopeList };
