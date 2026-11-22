import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyBetweenHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyBetweenHorizontal: ForwardRefExoticComponent<JustifyBetweenHorizontalProps & RefAttributes<SVGSVGElement>>;

export default JustifyBetweenHorizontal;
export { JustifyBetweenHorizontal };
