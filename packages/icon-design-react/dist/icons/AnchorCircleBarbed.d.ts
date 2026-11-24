import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AnchorCircleBarbedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AnchorCircleBarbed: ForwardRefExoticComponent<AnchorCircleBarbedProps & RefAttributes<SVGSVGElement>>;

export default AnchorCircleBarbed;
export { AnchorCircleBarbed };
