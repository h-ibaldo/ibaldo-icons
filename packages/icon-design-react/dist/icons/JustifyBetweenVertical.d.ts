import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyBetweenVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyBetweenVertical: ForwardRefExoticComponent<JustifyBetweenVerticalProps & RefAttributes<SVGSVGElement>>;

export default JustifyBetweenVertical;
export { JustifyBetweenVertical };
