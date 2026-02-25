import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplyArrow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplyArrow2: ForwardRefExoticComponent<ReplyArrow2Props & RefAttributes<SVGSVGElement>>;

export default ReplyArrow2;
export { ReplyArrow2 };
