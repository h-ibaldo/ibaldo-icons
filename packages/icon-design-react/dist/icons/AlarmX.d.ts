import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmX: ForwardRefExoticComponent<AlarmXProps & RefAttributes<SVGSVGElement>>;

export default AlarmX;
export { AlarmX };
