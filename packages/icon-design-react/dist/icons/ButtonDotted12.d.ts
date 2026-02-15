import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotted12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotted12: ForwardRefExoticComponent<ButtonDotted12Props & RefAttributes<SVGSVGElement>>;

export default ButtonDotted12;
export { ButtonDotted12 };
