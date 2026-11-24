import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPill: ForwardRefExoticComponent<ButtonPillProps & RefAttributes<SVGSVGElement>>;

export default ButtonPill;
export { ButtonPill };
