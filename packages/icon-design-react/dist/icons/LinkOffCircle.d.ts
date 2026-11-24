import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkOffCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkOffCircle: ForwardRefExoticComponent<LinkOffCircleProps & RefAttributes<SVGSVGElement>>;

export default LinkOffCircle;
export { LinkOffCircle };
