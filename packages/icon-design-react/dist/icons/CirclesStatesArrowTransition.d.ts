import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CirclesStatesArrowTransitionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CirclesStatesArrowTransition: ForwardRefExoticComponent<CirclesStatesArrowTransitionProps & RefAttributes<SVGSVGElement>>;

export default CirclesStatesArrowTransition;
export { CirclesStatesArrowTransition };
