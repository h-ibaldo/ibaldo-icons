import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtMinusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtMinusTall: ForwardRefExoticComponent<AtMinusTallProps & RefAttributes<SVGSVGElement>>;

export default AtMinusTall;
export { AtMinusTall };
