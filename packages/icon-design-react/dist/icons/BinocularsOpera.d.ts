import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsOperaProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsOpera: ForwardRefExoticComponent<BinocularsOperaProps & RefAttributes<SVGSVGElement>>;

export default BinocularsOpera;
export { BinocularsOpera };
