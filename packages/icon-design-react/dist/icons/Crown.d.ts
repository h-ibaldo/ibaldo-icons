import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Crown: ForwardRefExoticComponent<CrownProps & RefAttributes<SVGSVGElement>>;

export default Crown;
export { Crown };
