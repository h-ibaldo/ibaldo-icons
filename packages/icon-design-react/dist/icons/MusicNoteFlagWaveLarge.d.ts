import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteFlagWaveLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteFlagWaveLarge: ForwardRefExoticComponent<MusicNoteFlagWaveLargeProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteFlagWaveLarge;
export { MusicNoteFlagWaveLarge };
