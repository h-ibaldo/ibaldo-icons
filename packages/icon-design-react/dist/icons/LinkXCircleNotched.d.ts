import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXCircleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXCircleNotched: ForwardRefExoticComponent<LinkXCircleNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkXCircleNotched;
export { LinkXCircleNotched };
