import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicSixteenthProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicSixteenth: ForwardRefExoticComponent<MusicSixteenthProps & RefAttributes<SVGSVGElement>>;

export default MusicSixteenth;
export { MusicSixteenth };
