import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbUp: ForwardRefExoticComponent<HandThumbUpProps & RefAttributes<SVGSVGElement>>;

export default HandThumbUp;
export { HandThumbUp };
