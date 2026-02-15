import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AnimatedCircleMoving2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AnimatedCircleMoving2: ForwardRefExoticComponent<AnimatedCircleMoving2Props & RefAttributes<SVGSVGElement>>;

export default AnimatedCircleMoving2;
export { AnimatedCircleMoving2 };
