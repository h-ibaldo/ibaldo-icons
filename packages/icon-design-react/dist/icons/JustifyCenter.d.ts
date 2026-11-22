import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyCenter: ForwardRefExoticComponent<JustifyCenterProps & RefAttributes<SVGSVGElement>>;

export default JustifyCenter;
export { JustifyCenter };
