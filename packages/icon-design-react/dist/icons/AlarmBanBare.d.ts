import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBanBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBanBare: ForwardRefExoticComponent<AlarmBanBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmBanBare;
export { AlarmBanBare };
