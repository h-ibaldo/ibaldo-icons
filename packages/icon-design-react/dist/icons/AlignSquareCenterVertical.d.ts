import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareCenterVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareCenterVertical: ForwardRefExoticComponent<AlignSquareCenterVerticalProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareCenterVertical;
export { AlignSquareCenterVertical };
