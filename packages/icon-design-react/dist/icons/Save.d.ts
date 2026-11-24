import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Save: ForwardRefExoticComponent<SaveProps & RefAttributes<SVGSVGElement>>;

export default Save;
export { Save };
