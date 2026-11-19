import type { DefineComponent } from 'vue';

export interface TrayLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayLines: DefineComponent<TrayLinesProps>;

export default TrayLines;
export { TrayLines };
