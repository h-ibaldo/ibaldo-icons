import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmCheckBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmCheckBare: ForwardRefExoticComponent<AlarmCheckBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmCheckBare;
export { AlarmCheckBare };
