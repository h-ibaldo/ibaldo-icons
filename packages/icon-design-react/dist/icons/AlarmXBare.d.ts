import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmXBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmXBare: ForwardRefExoticComponent<AlarmXBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmXBare;
export { AlarmXBare };
