import type { DefineComponent } from 'vue';

export interface GearStackSpikyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearStackSpiky: DefineComponent<GearStackSpikyProps>;

export default GearStackSpiky;
export { GearStackSpiky };
