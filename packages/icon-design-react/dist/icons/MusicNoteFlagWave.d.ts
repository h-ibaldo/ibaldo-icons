import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteFlagWaveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteFlagWave: ForwardRefExoticComponent<MusicNoteFlagWaveProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteFlagWave;
export { MusicNoteFlagWave };
