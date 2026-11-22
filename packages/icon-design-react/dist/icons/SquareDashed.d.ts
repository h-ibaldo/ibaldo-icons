import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDashed: ForwardRefExoticComponent<SquareDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareDashed;
export { SquareDashed };
