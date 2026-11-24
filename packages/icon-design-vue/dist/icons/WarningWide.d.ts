import type { DefineComponent } from 'vue';

export interface WarningWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningWide: DefineComponent<WarningWideProps>;

export default WarningWide;
export { WarningWide };
