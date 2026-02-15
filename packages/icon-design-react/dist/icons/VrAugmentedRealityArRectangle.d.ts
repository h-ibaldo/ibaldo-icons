import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrAugmentedRealityArRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrAugmentedRealityArRectangle: ForwardRefExoticComponent<VrAugmentedRealityArRectangleProps & RefAttributes<SVGSVGElement>>;

export default VrAugmentedRealityArRectangle;
export { VrAugmentedRealityArRectangle };
