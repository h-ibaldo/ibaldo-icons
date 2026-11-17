import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDots: ForwardRefExoticComponent<ButtonDotsProps & RefAttributes<SVGSVGElement>>;

export default ButtonDots;
export { ButtonDots };
