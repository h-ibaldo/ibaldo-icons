import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlaySquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlaySquare: ForwardRefExoticComponent<PlaySquareProps & RefAttributes<SVGSVGElement>>;

export default PlaySquare;
export { PlaySquare };
