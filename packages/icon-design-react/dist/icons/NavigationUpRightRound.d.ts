import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationUpRightRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationUpRightRound: ForwardRefExoticComponent<NavigationUpRightRoundProps & RefAttributes<SVGSVGElement>>;

export default NavigationUpRightRound;
export { NavigationUpRightRound };
