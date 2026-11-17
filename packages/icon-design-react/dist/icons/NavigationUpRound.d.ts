import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRound: ForwardRefExoticComponent<NavigationUpRoundProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRound;
export { NavigationUpRound };
