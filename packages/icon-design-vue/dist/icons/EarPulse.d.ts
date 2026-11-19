import type { DefineComponent } from 'vue';

export interface EarPulseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EarPulse: DefineComponent<EarPulseProps>;

export default EarPulse;
export { EarPulse };
