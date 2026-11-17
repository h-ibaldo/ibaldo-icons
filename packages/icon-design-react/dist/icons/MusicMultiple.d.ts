import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicMultipleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicMultiple: ForwardRefExoticComponent<MusicMultipleProps & RefAttributes<SVGSVGElement>>;

export default MusicMultiple;
export { MusicMultiple };
