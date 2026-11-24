import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFront: ForwardRefExoticComponent<BoxFrontProps & RefAttributes<SVGSVGElement>>;

export default BoxFront;
export { BoxFront };
