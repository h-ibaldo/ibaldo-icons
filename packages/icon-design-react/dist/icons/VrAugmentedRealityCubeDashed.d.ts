import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrAugmentedRealityCubeDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrAugmentedRealityCubeDashed: ForwardRefExoticComponent<VrAugmentedRealityCubeDashedProps & RefAttributes<SVGSVGElement>>;

export default VrAugmentedRealityCubeDashed;
export { VrAugmentedRealityCubeDashed };
