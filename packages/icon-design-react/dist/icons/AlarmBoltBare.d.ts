import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBoltBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBoltBare: ForwardRefExoticComponent<AlarmBoltBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmBoltBare;
export { AlarmBoltBare };
