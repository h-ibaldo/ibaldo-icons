import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpLeftRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpLeftRound: ForwardRefExoticComponent<NavigationUpLeftRoundProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpLeftRound;
export { NavigationUpLeftRound };
