import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPillDots: ForwardRefExoticComponent<ButtonPillDotsProps & RefAttributes<SVGSVGElement>>;

export default ButtonPillDots;
export { ButtonPillDots };
