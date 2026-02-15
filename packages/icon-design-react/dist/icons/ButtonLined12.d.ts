import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonLined12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonLined12: ForwardRefExoticComponent<ButtonLined12Props & RefAttributes<SVGSVGElement>>;

export default ButtonLined12;
export { ButtonLined12 };
