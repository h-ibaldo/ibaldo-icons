import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollHorizontalChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollHorizontalChat: ForwardRefExoticComponent<PollHorizontalChatProps & RefAttributes<SVGSVGElement>>;

export default PollHorizontalChat;
export { PollHorizontalChat };
