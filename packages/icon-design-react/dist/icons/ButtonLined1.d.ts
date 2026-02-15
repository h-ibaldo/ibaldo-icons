import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonLined1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonLined1: ForwardRefExoticComponent<ButtonLined1Props & RefAttributes<SVGSVGElement>>;

export default ButtonLined1;
export { ButtonLined1 };
