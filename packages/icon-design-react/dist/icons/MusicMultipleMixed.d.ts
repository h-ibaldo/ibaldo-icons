import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicMultipleMixedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicMultipleMixed: ForwardRefExoticComponent<MusicMultipleMixedProps & RefAttributes<SVGSVGElement>>;

export default MusicMultipleMixed;
export { MusicMultipleMixed };
