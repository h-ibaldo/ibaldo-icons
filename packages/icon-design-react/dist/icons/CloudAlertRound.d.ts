import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAlertRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAlertRound: ForwardRefExoticComponent<CloudAlertRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudAlertRound;
export { CloudAlertRound };
