import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsWideDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScissorsWideDotted: ForwardRefExoticComponent<ScissorsWideDottedProps & RefAttributes<SVGSVGElement>>;

export default ScissorsWideDotted;
export { ScissorsWideDotted };
