import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrosshairCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrosshairCorners: ForwardRefExoticComponent<CrosshairCornersProps & RefAttributes<SVGSVGElement>>;

export default CrosshairCorners;
export { CrosshairCorners };
