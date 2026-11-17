import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtPlusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtPlusBoxy: ForwardRefExoticComponent<AtPlusBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtPlusBoxy;
export { AtPlusBoxy };
