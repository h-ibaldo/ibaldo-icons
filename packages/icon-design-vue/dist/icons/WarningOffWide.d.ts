import type { DefineComponent } from 'vue';

export interface WarningOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningOffWide: DefineComponent<WarningOffWideProps>;

export default WarningOffWide;
export { WarningOffWide };
