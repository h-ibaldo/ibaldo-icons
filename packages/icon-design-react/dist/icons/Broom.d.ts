import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BroomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Broom: ForwardRefExoticComponent<BroomProps & RefAttributes<SVGSVGElement>>;

export default Broom;
export { Broom };
