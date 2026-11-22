import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignBottom: ForwardRefExoticComponent<AlignBottomProps & RefAttributes<SVGSVGElement>>;

export default AlignBottom;
export { AlignBottom };
