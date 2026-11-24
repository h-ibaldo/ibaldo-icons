import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsCompactRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsCompactRound: ForwardRefExoticComponent<BinocularsCompactRoundProps & RefAttributes<SVGSVGElement>>;

export default BinocularsCompactRound;
export { BinocularsCompactRound };
