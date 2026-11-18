import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrophyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Trophy: ForwardRefExoticComponent<TrophyProps & RefAttributes<SVGSVGElement>>;

export default Trophy;
export { Trophy };
