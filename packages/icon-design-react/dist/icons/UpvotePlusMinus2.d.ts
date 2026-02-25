import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvotePlusMinus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvotePlusMinus2: ForwardRefExoticComponent<UpvotePlusMinus2Props & RefAttributes<SVGSVGElement>>;

export default UpvotePlusMinus2;
export { UpvotePlusMinus2 };
