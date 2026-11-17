import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4PasswordProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Password: ForwardRefExoticComponent<Lock4PasswordProps & RefAttributes<SVGSVGElement>>;

export default Lock4Password;
export { Lock4Password };
