import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBare: ForwardRefExoticComponent<AlarmBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmBare;
export { AlarmBare };
