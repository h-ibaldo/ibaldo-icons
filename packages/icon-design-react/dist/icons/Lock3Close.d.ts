import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Close: ForwardRefExoticComponent<Lock3CloseProps & RefAttributes<SVGSVGElement>>;

export default Lock3Close;
export { Lock3Close };
