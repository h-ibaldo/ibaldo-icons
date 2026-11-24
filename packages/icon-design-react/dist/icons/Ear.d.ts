import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Ear: ForwardRefExoticComponent<EarProps & RefAttributes<SVGSVGElement>>;

export default Ear;
export { Ear };
