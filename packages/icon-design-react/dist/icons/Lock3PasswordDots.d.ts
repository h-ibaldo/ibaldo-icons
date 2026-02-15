import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3PasswordDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3PasswordDots: ForwardRefExoticComponent<Lock3PasswordDotsProps & RefAttributes<SVGSVGElement>>;

export default Lock3PasswordDots;
export { Lock3PasswordDots };
