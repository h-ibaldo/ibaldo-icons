import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3PasswordProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Password: ForwardRefExoticComponent<Lock3PasswordProps & RefAttributes<SVGSVGElement>>;

export default Lock3Password;
export { Lock3Password };
