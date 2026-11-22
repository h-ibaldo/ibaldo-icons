import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyLeft: ForwardRefExoticComponent<JustifyLeftProps & RefAttributes<SVGSVGElement>>;

export default JustifyLeft;
export { JustifyLeft };
