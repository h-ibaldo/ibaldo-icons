import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Warning: ForwardRefExoticComponent<WarningProps & RefAttributes<SVGSVGElement>>;

export default Warning;
export { Warning };
