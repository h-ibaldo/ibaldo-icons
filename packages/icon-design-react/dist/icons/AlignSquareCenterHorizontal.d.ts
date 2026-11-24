import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareCenterHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareCenterHorizontal: ForwardRefExoticComponent<AlignSquareCenterHorizontalProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareCenterHorizontal;
export { AlignSquareCenterHorizontal };
