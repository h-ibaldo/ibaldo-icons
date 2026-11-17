import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteFlagSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteFlagSquare: ForwardRefExoticComponent<MusicNoteFlagSquareProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteFlagSquare;
export { MusicNoteFlagSquare };
