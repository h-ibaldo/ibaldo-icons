import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrosshairDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrosshairDot: ForwardRefExoticComponent<CrosshairDotProps & RefAttributes<SVGSVGElement>>;

export default CrosshairDot;
export { CrosshairDot };
