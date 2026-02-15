import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2ToolsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Tools: ForwardRefExoticComponent<ApplicationWindow2ToolsProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Tools;
export { ApplicationWindow2Tools };
