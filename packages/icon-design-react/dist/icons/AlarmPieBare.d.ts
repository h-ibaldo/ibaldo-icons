import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPieBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPieBare: ForwardRefExoticComponent<AlarmPieBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmPieBare;
export { AlarmPieBare };
