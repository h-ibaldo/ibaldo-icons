import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderRight: ForwardRefExoticComponent<BorderRightProps & RefAttributes<SVGSVGElement>>;

export default BorderRight;
export { BorderRight };
