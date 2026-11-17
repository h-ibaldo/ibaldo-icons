import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyAngular: ForwardRefExoticComponent<KeyAngularProps & RefAttributes<SVGSVGElement>>;

export default KeyAngular;
export { KeyAngular };
