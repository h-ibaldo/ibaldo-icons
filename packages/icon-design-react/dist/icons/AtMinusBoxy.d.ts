import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtMinusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtMinusBoxy: ForwardRefExoticComponent<AtMinusBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtMinusBoxy;
export { AtMinusBoxy };
