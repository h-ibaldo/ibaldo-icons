import type { DefineComponent } from 'vue';

export interface CameraSyncOrbitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraSyncOrbit: DefineComponent<CameraSyncOrbitProps>;

export default CameraSyncOrbit;
export { CameraSyncOrbit };
