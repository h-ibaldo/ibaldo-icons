import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FeaturesListStars2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FeaturesListStars2: ForwardRefExoticComponent<FeaturesListStars2Props & RefAttributes<SVGSVGElement>>;

export default FeaturesListStars2;
export { FeaturesListStars2 };
