import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotApproximateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotApproximate: ForwardRefExoticComponent<NotApproximateProps & RefAttributes<SVGSVGElement>>;

export default NotApproximate;
export { NotApproximate };
