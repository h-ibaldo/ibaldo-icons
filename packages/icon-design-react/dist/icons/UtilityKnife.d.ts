import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UtilityKnifeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UtilityKnife: ForwardRefExoticComponent<UtilityKnifeProps & RefAttributes<SVGSVGElement>>;

export default UtilityKnife;
export { UtilityKnife };
