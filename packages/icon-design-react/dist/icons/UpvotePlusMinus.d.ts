import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvotePlusMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvotePlusMinus: ForwardRefExoticComponent<UpvotePlusMinusProps & RefAttributes<SVGSVGElement>>;

export default UpvotePlusMinus;
export { UpvotePlusMinus };
