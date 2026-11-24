import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleSlanted: ForwardRefExoticComponent<LinkMinusCircleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleSlanted;
export { LinkMinusCircleSlanted };
