import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolboxRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolboxRound: ForwardRefExoticComponent<ToolboxRoundProps & RefAttributes<SVGSVGElement>>;

export default ToolboxRound;
export { ToolboxRound };
