import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotted1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotted1: ForwardRefExoticComponent<ButtonDotted1Props & RefAttributes<SVGSVGElement>>;

export default ButtonDotted1;
export { ButtonDotted1 };
