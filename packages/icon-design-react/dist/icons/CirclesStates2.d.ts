import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CirclesStates2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CirclesStates2: ForwardRefExoticComponent<CirclesStates2Props & RefAttributes<SVGSVGElement>>;

export default CirclesStates2;
export { CirclesStates2 };
