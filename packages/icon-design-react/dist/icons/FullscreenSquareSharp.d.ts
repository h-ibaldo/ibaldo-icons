import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenSquareSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenSquareSharp: ForwardRefExoticComponent<FullscreenSquareSharpProps & RefAttributes<SVGSVGElement>>;

export default FullscreenSquareSharp;
export { FullscreenSquareSharp };
