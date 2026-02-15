import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab1ExtraFeaturesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab1ExtraFeatures: ForwardRefExoticComponent<Tab1ExtraFeaturesProps & RefAttributes<SVGSVGElement>>;

export default Tab1ExtraFeatures;
export { Tab1ExtraFeatures };
