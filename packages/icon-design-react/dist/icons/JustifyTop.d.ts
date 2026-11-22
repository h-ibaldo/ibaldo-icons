import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyTop: ForwardRefExoticComponent<JustifyTopProps & RefAttributes<SVGSVGElement>>;

export default JustifyTop;
export { JustifyTop };
