import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PyramidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Pyramid: ForwardRefExoticComponent<PyramidProps & RefAttributes<SVGSVGElement>>;

export default Pyramid;
export { Pyramid };
