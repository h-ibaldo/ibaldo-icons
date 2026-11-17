import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Play: ForwardRefExoticComponent<PlayProps & RefAttributes<SVGSVGElement>>;

export default Play;
export { Play };
