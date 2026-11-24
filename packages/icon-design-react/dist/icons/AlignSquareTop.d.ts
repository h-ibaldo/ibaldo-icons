import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareTop: ForwardRefExoticComponent<AlignSquareTopProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareTop;
export { AlignSquareTop };
