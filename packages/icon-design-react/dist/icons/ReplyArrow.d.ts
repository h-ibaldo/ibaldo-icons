import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplyArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplyArrow: ForwardRefExoticComponent<ReplyArrowProps & RefAttributes<SVGSVGElement>>;

export default ReplyArrow;
export { ReplyArrow };
