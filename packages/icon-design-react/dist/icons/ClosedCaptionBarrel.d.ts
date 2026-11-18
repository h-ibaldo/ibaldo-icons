import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionBarrelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionBarrel: ForwardRefExoticComponent<ClosedCaptionBarrelProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionBarrel;
export { ClosedCaptionBarrel };
