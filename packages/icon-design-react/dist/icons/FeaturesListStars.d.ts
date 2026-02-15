import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FeaturesListStarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FeaturesListStars: ForwardRefExoticComponent<FeaturesListStarsProps & RefAttributes<SVGSVGElement>>;

export default FeaturesListStars;
export { FeaturesListStars };
