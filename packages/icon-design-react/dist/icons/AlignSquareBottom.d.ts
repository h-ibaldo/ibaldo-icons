import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareBottom: ForwardRefExoticComponent<AlignSquareBottomProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareBottom;
export { AlignSquareBottom };
