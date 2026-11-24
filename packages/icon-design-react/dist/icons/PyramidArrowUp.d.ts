import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PyramidArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PyramidArrowUp: ForwardRefExoticComponent<PyramidArrowUpProps & RefAttributes<SVGSVGElement>>;

export default PyramidArrowUp;
export { PyramidArrowUp };
