import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Medal: ForwardRefExoticComponent<MedalProps & RefAttributes<SVGSVGElement>>;

export default Medal;
export { Medal };
