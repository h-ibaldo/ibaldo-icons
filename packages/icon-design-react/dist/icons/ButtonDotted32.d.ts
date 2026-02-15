import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotted32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotted32: ForwardRefExoticComponent<ButtonDotted32Props & RefAttributes<SVGSVGElement>>;

export default ButtonDotted32;
export { ButtonDotted32 };
