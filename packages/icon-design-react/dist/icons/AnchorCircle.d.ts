import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AnchorCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AnchorCircle: ForwardRefExoticComponent<AnchorCircleProps & RefAttributes<SVGSVGElement>>;

export default AnchorCircle;
export { AnchorCircle };
