import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SlashCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SlashCircle: ForwardRefExoticComponent<SlashCircleProps & RefAttributes<SVGSVGElement>>;

export default SlashCircle;
export { SlashCircle };
