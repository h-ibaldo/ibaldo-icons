import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressDotsRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressDotsRight: ForwardRefExoticComponent<ProgressDotsRightProps & RefAttributes<SVGSVGElement>>;

export default ProgressDotsRight;
export { ProgressDotsRight };
