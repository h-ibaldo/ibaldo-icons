import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabExtraFeaturesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabExtraFeatures: ForwardRefExoticComponent<TabExtraFeaturesProps & RefAttributes<SVGSVGElement>>;

export default TabExtraFeatures;
export { TabExtraFeatures };
