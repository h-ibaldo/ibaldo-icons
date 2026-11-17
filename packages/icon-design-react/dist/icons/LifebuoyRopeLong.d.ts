import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LifebuoyRopeLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LifebuoyRopeLong: ForwardRefExoticComponent<LifebuoyRopeLongProps & RefAttributes<SVGSVGElement>>;

export default LifebuoyRopeLong;
export { LifebuoyRopeLong };
