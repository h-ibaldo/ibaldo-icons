import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart1StripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart1Striped: ForwardRefExoticComponent<Heart1StripedProps & RefAttributes<SVGSVGElement>>;

export default Heart1Striped;
export { Heart1Striped };
