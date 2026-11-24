import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareFrameProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareFrame: ForwardRefExoticComponent<AlignSquareFrameProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareFrame;
export { AlignSquareFrame };
