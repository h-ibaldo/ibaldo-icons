import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotted3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotted3: ForwardRefExoticComponent<ButtonDotted3Props & RefAttributes<SVGSVGElement>>;

export default ButtonDotted3;
export { ButtonDotted3 };
