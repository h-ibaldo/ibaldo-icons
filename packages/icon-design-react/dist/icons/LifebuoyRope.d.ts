import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LifebuoyRopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LifebuoyRope: ForwardRefExoticComponent<LifebuoyRopeProps & RefAttributes<SVGSVGElement>>;

export default LifebuoyRope;
export { LifebuoyRope };
