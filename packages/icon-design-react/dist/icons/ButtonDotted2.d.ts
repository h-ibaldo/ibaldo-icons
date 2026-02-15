import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotted2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotted2: ForwardRefExoticComponent<ButtonDotted2Props & RefAttributes<SVGSVGElement>>;

export default ButtonDotted2;
export { ButtonDotted2 };
