import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtDotsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtDotsBoxy: ForwardRefExoticComponent<AtDotsBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtDotsBoxy;
export { AtDotsBoxy };
