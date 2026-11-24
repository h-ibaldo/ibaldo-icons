import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyRight: ForwardRefExoticComponent<JustifyRightProps & RefAttributes<SVGSVGElement>>;

export default JustifyRight;
export { JustifyRight };
