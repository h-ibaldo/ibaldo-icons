import type { DefineComponent } from 'vue';

export interface AnchorBarbedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AnchorBarbed: DefineComponent<AnchorBarbedProps>;

export default AnchorBarbed;
export { AnchorBarbed };
