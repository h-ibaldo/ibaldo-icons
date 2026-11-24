import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScissorsUp: ForwardRefExoticComponent<ScissorsUpProps & RefAttributes<SVGSVGElement>>;

export default ScissorsUp;
export { ScissorsUp };
